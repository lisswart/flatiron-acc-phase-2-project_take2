import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnSearchMode, query,
                        setIsOnEditMode, cardToBeEdited, 
                        setCardToBeEdited, editCard, 
                        deleteCard, cardIndex,
                        wantToViewLearnedCards,
                        wantToViewNeedToReviewCards }) {

    function displayCards() {
        return cards
                .slice(cardIndex, cardIndex + 6)
                .map((card) => {
                    return (
                        <FlashCard card={card} key={card.id}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard} 
                        />  
                    );
        });
    }

    function needToReview(card) {
        return card.needsReview === true;
    }

    function isLearned(card) {
        return card.needsReview === false;
    }

    function isMatched(card) {
        if(query.toString() !== "")
            return (card.headword).toLowerCase()
                        .includes(query.toString().toLowerCase());
    }

    function displayMatchedCards() {
        const filteredCards = cards.filter(isMatched);
        return filteredCards
                .slice(cardIndex, cardIndex + 6)
                .map(card => {
                    return (                        
                        <FlashCard card={card} key={card.id}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}                           
                        />         
                    );
                });        
    }

    function displayLearnedCards() {
        const filteredCards = cards.filter(isLearned);
        return filteredCards
                .slice(cardIndex, cardIndex + 6)
                .map(card =>
                    <FlashCard card={card} key={card.id}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}                             
                    />   
            );
    }

    function displayNeedToReviewCards() {
        const filteredCards = cards.filter(needToReview);
        return filteredCards
                .slice(cardIndex, cardIndex + 6)
                .map((card) => {
                    return (
                        <FlashCard card={card} key={card.id}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}                                
                        />   
                    );
        });
    }

    return (
        <ul className="card-list scroller">
            {
                cards.length === 0
                ?   <div className="loading-flashcards">
                        <div>Loading...</div>
                    </div>
                :   isOnSearchMode
                ?   <>
                        <div style={{display: "flex", flexWrap: "wrap"}}>{displayMatchedCards()}</div>
                    </>
                :   wantToViewLearnedCards
                ?   <>
                        <div style={{display: "flex", flexWrap: "wrap"}}>{displayLearnedCards()}</div>
                    </>
                :   wantToViewNeedToReviewCards
                ?   <>
                        <div style={{display: "flex", flexWrap: "wrap"}}>{displayNeedToReviewCards()}</div>
                    </>
                :   <>
                        <div style={{display: "flex", flexWrap: "wrap"}}>{displayCards()}</div>
                    </>
            }
        </ul>
    );
}

export default FlashCardsDeck;
