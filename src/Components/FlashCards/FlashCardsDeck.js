import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnEditMode, 
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
            )
        })
    }
    return (
        <ul>
            {
                cards.length === 0
                ? <div className="loading">Loading...</div>
                : displayCards()
            }
        </ul>
    );
}

export default FlashCardsDeck;
