import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnSearchMode, query,
                        isOnEditMode, setIsOnEditMode, 
                        cardToBeEdited, setCardToBeEdited, 
                        editCard, deleteCard, cardIndex,
                        masteredCard }) {

    function displayCards() {
        return cards
                .filter(card => card.needsReview)
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
                            masteredCard={masteredCard} />
                    );
        });
    }

    function isMatched(card) {
        return card.headword.includes(query.toString());
    }

    function displayMatchedCards() {
        const filteredCards = cards.filter(isMatched);
        return filteredCards
                .filter(card => card.needsReview)
                .map(card => {
                    return (                        
                        <FlashCard card={card} key={card.id}
                                isOnEditMode={isOnEditMode}
                                setIsOnEditMode={setIsOnEditMode}
                                cardToBeEdited={cardToBeEdited}
                                setCardToBeEdited={setCardToBeEdited}
                                editCard={editCard}
                                deleteCard={deleteCard}
                                masteredCard={masteredCard} 
                        />           
                    );
                });        
    }

    return (
        <ul className="card-list">
            {
                cards.length === 0
                ?   <div className="loading-flashcards">
                        <div>Loading...</div>
                    </div>
                :   isOnSearchMode
                ?   displayMatchedCards() 
                :   displayCards()
            }
        </ul>
    );
}

export default FlashCardsDeck;
