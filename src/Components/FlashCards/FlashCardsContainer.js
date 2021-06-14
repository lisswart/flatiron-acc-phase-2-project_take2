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
        verbalIllustration: ""
    });
    const [newCard, setNewCard] = useState(false);
    const [isOnEditMode, setIsOnEditMode] = useState(false);
    const [cardToBeEdited, setCardToBeEdited] = useState({
        id: undefined,
        headword: "",
        functionalLabel: ""
    });
    const [editFormState, setEditFormState] = useState({
        headword: "",
        functionalLabel: "",
        definition: "",
        verbalIllustration: ""
    });
    const [isOnSearchMode, setIsOnSearchMode] = useState(false);
    const [query, setQuery] = useState("");
    const [isOnSortMode, setIsOnSortMode] = useState(false);
    
    useEffect(() => {        
        fetch(URL)
            .then(r => r.json())
            .then(cardObjs => {
                setCards(cardObjs);
            });
    }, []);

    function addCard(card) {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        })
            .then(r => r.json())
            .then(newCard => {
                const augmentedDeckOfCards = [...cards, newCard];
                setCards(augmentedDeckOfCards);
            });
    }

    function deleteCard(cardId) {
        fetch(`${URL}/${cardId}`, {
            method: "DELETE"            
        })
            .then(r => r.json())
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

    return (
        <div className="flashcards-container">
            <LeftPanel cards={cards}
                isOnSearchMode={isOnSearchMode}
                query={query}
                isOnSortMode={isOnSortMode}
                setIsOnSortMode={setIsOnSortMode}
                newCard={newCard}
                setNewCard={setNewCard} 
                isOnEditMode={isOnEditMode}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited} 
                editCard={editCard} 
                deleteCard={deleteCard} />
            {
                newCard 
                ?   <NewFlashCardEntryForm path={"/newCardEntryForm"}                            
                        formState={formState} 
                        setFormState={setFormState} 
                        addCard={addCard} 
                        setNewCard={setNewCard} />
                :   isOnEditMode 
                ?   <EditForm editFormState={editFormState} 
                        setEditFormState={setEditFormState} 
                        cardToBeEdited={cardToBeEdited}
                        isOnEditMode={isOnEditMode}
                        setIsOnEditMode={setIsOnEditMode} 
                        editCard={editCard} />
                :   <RightPanel 
                        cards={cards}
                        isOnSearchMode={isOnSearchMode}
                        setIsOnSearchMode={setIsOnSearchMode}
                        onSubmitQuery={setQuery} 
                    />
            } 
        </div>
    );
}

export default FlashCardsContainer;
