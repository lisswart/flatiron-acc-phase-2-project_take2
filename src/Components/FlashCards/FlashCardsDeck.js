import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnSearchMode, query,
                        isOnEditMode, setIsOnEditMode, 
                        cardToBeEdited, setCardToBeEdited, 
                        editCard, deleteCard, cardIndex,
                        masteredCard, setCards,
                        learnedCards, setLearnedCards, 
                        updateLearnedCard, wantToViewLearnedCards, 
                        needToReviewCards, setNeedToReviewCards, 
                        countOfLearnedCards, setCountOfLearnedCards,
                        updateNeedToReviewCards,
                        wantToViewNeedToReviewCards }) {

    function displayCards() {
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
                                learnedCards={learnedCards}
                                setLearnedCards={setLearnedCards}
                                updateLearnedCard={updateLearnedCard}
                                needToReviewCards={needToReviewCards}
                                setNeedToReviewCards={setNeedToReviewCards} 
                                updateNeedToReviewCards={updateNeedToReviewCards}
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
                                learnedCards={learnedCards}
                                setLearnedCards={setLearnedCards}
                                updateLearnedCard={updateLearnedCard}
                                needToReviewCards={needToReviewCards}
                                setNeedToReviewCards={setNeedToReviewCards} 
                                updateNeedToReviewCards={updateNeedToReviewCards}
                        />           
                    );
                });        
    }

    function displayLearnedCards() {
        const filteredCards = cards.filter(isLearned);
        setLearnedCards = filteredCards;
        // setCountOfLearnedCards(filteredCards.length);
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
                            learnedCards={learnedCards}
                            setLearnedCards={setLearnedCards}
                            updateLearnedCard={updateLearnedCard}
                            needToReviewCards={needToReviewCards}
                            setNeedToReviewCards={setNeedToReviewCards} 
                            updateNeedToReviewCards={updateNeedToReviewCards}
                    />   
            );
    }

    function displayNeedToReviewCards() {

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
                ?   displayLearnedCards()
                :   wantToViewNeedToReviewCards
                ?   displayNeedToReviewCards()
                :   displayCards()
            }
        </ul>
    );
}

export default FlashCardsDeck;
