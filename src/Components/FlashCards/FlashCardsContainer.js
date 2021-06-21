import "./FlashCards.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { useState, useEffect } from "react";
import NewFlashCardEntryForm from "./NewFlashCardEntryForm";
import EditForm from "./EditForm";

const URL = `https://hidden-harbor-11546.herokuapp.com/words`;
//const LOCAL = `http://localhost:4000/words`;

function FlashCardsContainer() {
    const [cards, setCards] = useState([]);    
    const [formState, setFormState] = useState({
        headword: "",
        functionalLabel: "",
        definition: "",
        verbalIllustration: "",
        needsReview: true
    });
    const [isNewCard, setIsNewCard] = useState(false);
    const [isOnEditMode, setIsOnEditMode] = useState(false);
    const [cardToBeEdited, setCardToBeEdited] = useState({
        // id: undefined,
        // headword: "",
        // functionalLabel: ""
    });
    const [editFormState, setEditFormState] = useState({
        // headword: "",
        // functionalLabel: "",
        // definition: "",
        // verbalIllustration: "",
        // needsReview: true
    });
    const [isOnSearchMode, setIsOnSearchMode] = useState(false);
    const [query, setQuery] = useState("");
    const [isOnSortMode, setIsOnSortMode] = useState(false);
    const [masteredCards, setMasteredCards] = useState([]);
    const [masteredCount, setMasteredCount] = useState(0);
    
    useEffect(() => {        
        fetch(URL)
            .then(r => r.json())
            .then(cardObjs => {
                setCards(cardObjs);
            });
    }, []);

    useEffect(() => {
        fetch(URL)
            .then(r => r.json())
            .then(cards => {
                const _masteredCards = cards.filter(card => card.needsReview === false);
                // const _needsReviewCards = cards.filter(card => card.needsReview === true);
                setMasteredCount(_masteredCards.length);
            });
    }, [masteredCards]);

    function addCard(card) {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        })
            .then(r => {
                console.log(r);
                r.json();
            })
            .then(newCard => {
                const augmentedDeckOfCards = [...cards, newCard];
                setCards(augmentedDeckOfCards);
            });
    }

    function deleteCard(cardId) {
        fetch(`${URL}/${cardId}`, {
            method: "DELETE"            
        })
            .then(r => {
                console.log(r);
                r.json();
            })
            .then(() => {
                const updatedDeckOfCards = cards.filter(card => card.id !== cardId);
                setCards(updatedDeckOfCards);
            });
    }

    function editCard(id, updatedCard) {
        fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCard)
        })
            .then(r => r.json())
            .then((updatedCard) => {
                const updatedCards = cards.map((card) => {
                    if(card.id === updatedCard.id) return updatedCard;
                    return card;
                });
                setCards(updatedCards);
            });
    }

    function masteredCard(id, masteredCard) {
        fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(masteredCard)
        })
            .then(r => r.json())
            .then((updatedCard) => {
                const updatedCards = cards.filter((card) => card.id !== updatedCard.id);
                setCards(updatedCards);
                setMasteredCards([...masteredCards, updatedCard]);
            });
    }

    return (
        <div className="flashcards-container">
            <LeftPanel cards={cards}
                isOnSearchMode={isOnSearchMode}
                query={query}
                isOnSortMode={isOnSortMode}
                setIsOnSortMode={setIsOnSortMode}
                isNewCard={isNewCard}
                setIsNewCard={setIsNewCard} 
                isOnEditMode={isOnEditMode}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited} 
                editCard={editCard} 
                deleteCard={deleteCard}
                masteredCard={masteredCard}
                setCards={setCards} />
            {
                isNewCard 
                ?   <NewFlashCardEntryForm                            
                        formState={formState} 
                        setFormState={setFormState} 
                        addCard={addCard} 
                        setIsNewCard={setIsNewCard} />
                :   isOnEditMode 
                ?   <EditForm editFormState={editFormState} 
                        setEditFormState={setEditFormState} 
                        cardToBeEdited={cardToBeEdited}
                        isOnEditMode={isOnEditMode}
                        setIsOnEditMode={setIsOnEditMode} 
                        editCard={editCard} />
                // :   isLearnedDisplay
                // ?   <IsLearnedCardDeck masteredCards={masteredCards}/>
                :   <RightPanel 
                        cards={cards}
                        isOnSearchMode={isOnSearchMode}
                        setIsOnSearchMode={setIsOnSearchMode}
                        setQuery={setQuery}
                        masteredCards={masteredCards}
                        masteredCount={masteredCount} />
            } 
        </div>
    );
}

export default FlashCardsContainer;
