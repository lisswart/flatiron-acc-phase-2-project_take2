import FlashCard from "./FlashCard";
import { useState } from "react";

function FlashCardsDeck({ cards, isOnSearchMode, query, isOnEditMode, 
                        setIsOnEditMode, cardToBeEdited, 
                        setCardToBeEdited, editCard, 
                        deleteCard }) {
    
    const [cardIndex, setCardIndex] = useState(0);

    function displayCards() {
        return cards
                .slice(cardIndex, cardIndex + 4)
                .map((card, index) => {
                    return (
                        <FlashCard index={`index-${String.toString(index)}`}
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

    function isMatched(card) {
        return card.headword === query.toString();
    }

    function displayMatchedCards() {
        const filteredCards = cards.filter(isMatched);
        return filteredCards.map(card => {
            return (
                Object.keys(card).length === 0
                ?   <div className="no-match">
                        <>No match found</><br></br>
                        <div style={{color: "orange"}}>(˘･_･˘)</div>
                    </div>     
                :   <FlashCard card={card} key={card.id}
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
        <ol className="card-list">
            {
                cards.length === 0
                ?   <div className="loading-flashcard">Loading...</div>
                :   isOnSearchMode
                ?   (
                        cards.filter(isMatched)
                        ?   displayMatchedCards()
                        :   <div className="no-match">
                                <>No match found</>
                                <pre style={{color: "orange"}}>   (˘･_･˘)</pre>
                            </div> 
                    )   
                :   displayCards()
            }
            <div className="click-more-button-container">
                <button onClick={handleClickMore}
                        className="click-more-button">
                    ▶
                </button>
            </div>
        </ol>
    );
}

export default FlashCardsDeck;
