import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnSearchMode, query,
                        isOnEditMode, setIsOnEditMode, 
                        cardToBeEdited, setCardToBeEdited, 
                        editCard, deleteCard, cardIndex,
                        masteredCard, setCards,
                        learnedCards, setLearnedCards, 
                        wantToViewLearnedCards, needToReviewCards, 
                        setNeedToReviewCards, 
                        wantToViewNeedToReviewCards }) {

    function displayCards() {
        return cards
                .slice(cardIndex, cardIndex + 6)
                .map((card) => {
                    return (
                        <FlashCard 
                            card={card} key={card.id}
                            isOnEditMode={isOnEditMode}
                            setIsOnEditMode={setIsOnEditMode}
                            cardToBeEdited={cardToBeEdited}
                            setCardToBeEdited={setCardToBeEdited}
                            editCard={editCard}
                            deleteCard={deleteCard}
                            masteredCard={masteredCard}
                            setCards={setCards} />
                    );
        });
    }

    function isMatched(card) {
        if(query.toString() !== "")
            return (card.headword).toLowerCase()
                        .includes(query.toString().toLowerCase());
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
                                deleteCard={deleteCard}
                                learnedCards={learnedCards}
                                setLearnedCards={setLearnedCards}
                                needToReviewCards={needToReviewCards}
                                setNeedToReviewCards={setNeedToReviewCards} 
                        />           
                    );
                });        
    }

    function displayLearnedCards() {

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
