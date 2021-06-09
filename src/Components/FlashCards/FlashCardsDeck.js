import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnEditMode, setIsOnEditMode, cardToBeEdited, setCardToBeEdited, editCard, deleteCard }) {

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
            {displayCards()}
        </ul>
    );
}

export default FlashCardsDeck;
