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
    const [formState, setFormState] = useState({});
    const [isNewCard, setIsNewCard] = useState(false);
    const [isOnEditMode, setIsOnEditMode] = useState(false);
    const [cardToBeEdited, setCardToBeEdited] = useState({});
    const [editFormState, setEditFormState] = useState({});
    const [isOnSearchMode, setIsOnSearchMode] = useState(false);
    const [query, setQuery] = useState("");
    const [isOnSortMode, setIsOnSortMode] = useState(false);
    
    useEffect(() => {        
        fetch(URL)
            .then(r => r.json())
            .then(cardObjs => setCards(cardObjs)
            );
    }, []);

    useEffect(() => setLearnedCards(learnedCards), [learnedCards]);

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
                console.log(updatedCard);
                const updatedCards = cards.map((card) => {
                    if(card.id === updatedCard.id) return updatedCard;
                    return card;
                });
                setCards(updatedCards);
            });
    }

    function updateLearnedCard(id, learnedCard) {
        fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(learnedCard)
        })
            .then(r => r.json())
            .then(updatedCard => {
                console.log(updatedCard);
                const updatedCards = cards.map(card => {
                    if(card.id === updatedCard.id) return updatedCard;
                    return card;
                });
                setCards(updatedCards);
                
            });
    }

    return (
        <div className="flashcards-container scroll-section">
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
                updateLearnedCard={updateLearnedCard}                              
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
                :   <RightPanel 
                        setIsOnSearchMode={setIsOnSearchMode}
                        setQuery={setQuery}
                        cards={cards} />
            } 
        </div>
    );
}

export default FlashCardsContainer;
