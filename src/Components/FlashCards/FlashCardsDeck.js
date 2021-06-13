import FlashCard from "./FlashCard";
import { useState } from "react";

function FlashCardsDeck({ cards, isOnSearchMode, query,
                        handleSortClickIncreasing,
                        handleSortClickDecreasing,
                        isOnSelectMode, setIsOnSelectMode,
                        onSelect, isOnEditMode, 
                        setIsOnEditMode, cardToBeEdited, 
                        setCardToBeEdited, editCard, 
                        deleteCard }) {
    
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

    function isMatched(card) {
        return card.headword === query.toString();
    }

    function displayMatchedCards() {
        const filteredCards = cards.filter(isMatched);
        return filteredCards
                .map(card => {
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

    // function displaySelectionSortedCards() {
    //     if(onSelect === "all") {
    //         displayCards();
    //     }
    //     const filteredCards = cards.filter((card) => 
    //         card.functionalLabel === onSelect);
    //     // setIsOnSelectMode(!isOnSelectMode);
    //     return filteredCards.map((card) => {
    //         return (
    //             <FlashCard card={card} key={card.id}
    //             isOnEditMode={isOnEditMode}
    //             setIsOnEditMode={setIsOnEditMode}
    //             cardToBeEdited={cardToBeEdited}
    //             setCardToBeEdited={setCardToBeEdited}
    //             editCard={editCard}
    //             deleteCard={deleteCard} />
    //         );
    //     });        
    // }

    return (
        <ul className="card-list">
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
                // :   isOnSelectMode
                // ?   displaySelectionSortedCards()
                :   displayCards()
            }
            <div className="click-more-button-container">
                <button onClick={handleClickMore}
                        className="click-more-button">
                    ▶
                </button>
            </div>
        </ul>
    );
}

export default FlashCardsDeck;
