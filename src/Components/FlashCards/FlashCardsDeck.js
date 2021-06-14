import FlashCard from "./FlashCard";
import { useState } from "react";

function FlashCardsDeck({ cards, isOnSearchMode, query,
                        isOnEditMode, setIsOnEditMode, 
                        cardToBeEdited, setCardToBeEdited, 
                        editCard, deleteCard }) {
    
    const [cardIndex, setCardIndex] = useState(0);

    function displayCards() {
        return cards
                .slice(cardIndex, cardIndex + 4)
                .map((card) => {
                    return (
                        <FlashCard 
                            card={card} key={card.id}
                            isOnEditMode={isOnEditMode}
                            setIsOnEditMode={setIsOnEditMode}
                            cardToBeEdited={cardToBeEdited}
                            setCardToBeEdited={setCardToBeEdited}
                            editCard={editCard}
                            deleteCard={deleteCard} />
                    );
        });
    }

    function handleClickMore() {
        setCardIndex((cardIndex) => (cardIndex + 4) % cards.length)
    }

    function handleClickBackward() {
        if(cardIndex >= 0) {
            setCardIndex((cardIndex) => 
                (cardIndex - 4) % cards.length
            );
        }
    }

    function isMatched(card) {
        return card.headword === query.toString();
    }

    function displayMatchedCards() {
        const filteredCards = cards.filter(isMatched);
        return filteredCards
                .map(card => {
                    return (
                        <FlashCard card={card} key={card.id}
                                isOnEditMode={isOnEditMode}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard} />           
                    );
        });        
    }

    return (
        <ul className="card-list">
            {
                cards.length === 0
                ?   <div className="loading-flashcards"><div>Loading...</div></div>
                :   isOnSearchMode
                ?   displayMatchedCards() 
                :   displayCards()
            }
            <div className="forward-backward-buttons-container">
                <div className="click-more-button-container">
                    <button onClick={handleClickBackward}
                            className="click-more-button">
                        ◀
                    </button>
                </div>
                <div className="click-more-button-container">
                    <button onClick={handleClickMore}
                            className="click-more-button">
                        ▶
                    </button>
                </div>
            </div>
        </ul>
    );
}

export default FlashCardsDeck;
