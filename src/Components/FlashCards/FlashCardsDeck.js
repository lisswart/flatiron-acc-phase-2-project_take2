import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnSearchMode, query, isOnEditMode, 
                        setIsOnEditMode, cardToBeEdited, 
                        setCardToBeEdited, editCard, 
                        deleteCard }) {

    function displayCards() {
        return cards.map((card) => {
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

    function isMatched(card) {
        return card.headword === query.toString();
    }

    function displayMatchedCards() {
        const filteredCards = cards.filter(isMatched);
        return filteredCards.map(card => {
            return (
                Object.keys(card).length !== 0
                ?   <FlashCard card={card} key={card.id}
                    isOnEditMode={isOnEditMode}
                    setIsOnEditMode={setIsOnEditMode}
                    cardToBeEdited={cardToBeEdited}
                    setCardToBeEdited={setCardToBeEdited}
                    editCard={editCard}
                    deleteCard={deleteCard} />
                :   <div className="no-match">
                        <div>No match found</div>
                    </div>                
            );
        });        
    }

    return (
        <ol className="card-list">
            {
                cards.length === 0
                ?   <div className="loading-flashcard">Loading...</div>
                :   isOnSearchMode
                ?   displayMatchedCards()
                :   displayCards()
            }
        </ol>
    );
}

export default FlashCardsDeck;
