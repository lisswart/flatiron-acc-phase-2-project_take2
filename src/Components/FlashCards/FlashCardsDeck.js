import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnSearchMode, query,
                        isOnEditMode, setIsOnEditMode, 
                        cardToBeEdited, setCardToBeEdited, 
                        editCard, deleteCard, cardIndex,
                        updateLearnedCard, wantToViewLearnedCards,
                        wantToViewNeedToReviewCards }) {

    function displayCards() {
        return cards
                .slice(cardIndex, cardIndex + 6)
                .map((card) => {
                    return (
                        <FlashCard card={card} key={card.id}
                                isOnEditMode={isOnEditMode}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}                                
                                updateLearnedCard={updateLearnedCard}                                
                        />  
                    );
        });
    }

    function needsReview(card) {
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
                                isOnEditMode={isOnEditMode}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}                                
                                updateLearnedCard={updateLearnedCard}                                
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
                                isOnEditMode={isOnEditMode}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}                                
                                updateLearnedCard={updateLearnedCard}                                
                    />   
            );
    }

    function displayNeedToReviewCards() {
        const filteredCards = cards.filter(needsReview);
        return filteredCards
                .slice(cardIndex, cardIndex + 6)
                .map((card) => {
                    return (
                        <FlashCard card={card} key={card.id}
                                isOnEditMode={isOnEditMode}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}                                
                                updateLearnedCard={updateLearnedCard}                                
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
                ?   displayMatchedCards()
                :   wantToViewLearnedCards
                ?   <>
                        <p>Learned Deck</p>
                        <div style={{display: "flex"}}>{displayLearnedCards()}</div>
                    </>
                :   wantToViewNeedToReviewCards
                ?   <>
                        <p>Need-to-Review Deck</p><br></br>
                        {displayNeedToReviewCards()}
                    </>
                :   <>
                        <p>Full Deck</p><br></br>
                        {displayCards()}
                    </>
            }
        </ul>
    );
}

export default FlashCardsDeck;
