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
                card
                ?   <FlashCard card={card} key={card.id}
                    isOnEditMode={isOnEditMode}
                    setIsOnEditMode={setIsOnEditMode}
                    cardToBeEdited={cardToBeEdited}
                    setCardToBeEdited={setCardToBeEdited}
                    editCard={editCard}
                    deleteCard={deleteCard} />
                :   <div className="no-match">No match found</div>                
            );
        })        
    }

    return (
        <ul>
            {
                cards.length === 0
                ?   <div className="loading-flashcard">Loading...</div>
                :   isOnSearchMode
                ?   displayMatchedCards()
                :   displayCards()
            }
        </ul>
    );
}

export default FlashCardsDeck;
