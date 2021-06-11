import "./FlashCards.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NewFlashCardEntryForm from "./NewFlashCardEntryForm";
import EditForm from "./EditForm";

//const URL = `https://hidden-harbor-11546.herokuapp.com/words`;
const LOCAL = `http://localhost:4000/words`;

function FlashCardsContainer() {
    //state of list of flashcards
    const [cards, setCards] = useState([]);
    
    const [formState, setFormState] = useState({
        headword: "",
        functionalLabel: "",
        definition: "",
        verbalIllustration: ""
    });
    //state of new button
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

    const [query, setQuery] = useState("");
    
    useEffect(() => {        
        fetch(LOCAL)
            .then(r => r.json())
            .then(cardObjs => {
                setCards(cardObjs);
            });
    }, []);

    function handleQuerySearch() {
        fetch(`${LOCAL}`)
    }

    function addCard(card) {
        fetch(LOCAL, {
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
        fetch(`${LOCAL}/${cardId}`, {
            method: "DELETE"            
        })
            .then(r => r.json())
            .then(() => {
                const updatedDeckOfCards = cards.filter(card => card.id !== cardId);
                setCards(updatedDeckOfCards);
            });
    }

    function editCard(id, updatedCard) {
        fetch(`${LOCAL}/${id}`, {
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
            })
    }

    return (
        <div className="flashcards-container">
            <LeftPanel cards={cards} 
                newCard={newCard}
                setNewCard={setNewCard} 
                // isOnEntryMode={isOnEntryMode}
                // setIsOnEntryMode={setIsOnEntryMode}
                isOnEditMode={isOnEditMode}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited} 
                editCard={editCard} 
                deleteCard={deleteCard} />
            <Switch>
                {/* <Route exact path={"/words/:id"}>
                    <FlashCardViewer />
                </Route> */}
                <Route>
                    {
                        newCard ? <NewFlashCardEntryForm path={"/newCardEntryForm"}
                            // isOnEntryMode={isOnEntryMode}
                            // setIsOnEntryMode={setIsOnEntryMode}
                            formState={formState} 
                            setFormState={setFormState} 
                            addCard={addCard} 
                            setNewCard={setNewCard} />
                        : isOnEditMode ? <EditForm editFormState={editFormState} 
                                                setEditFormState={setEditFormState} 
                                                cardToBeEdited={cardToBeEdited}
                                                isOnEditMode={isOnEditMode}
                                                setIsOnEditMode={setIsOnEditMode} 
                                                editCard={editCard} />
                        : <RightPanel onSubmitQuery={setQuery} />
                    } 
                </Route>
            </Switch>
            
        </div>
    );
}

export default FlashCardsContainer;
