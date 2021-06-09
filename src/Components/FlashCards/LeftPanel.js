import FlashCardsDeck from "./FlashCardsDeck";

function LeftPanel({ cards, setNewCard, isOnEditMode, setIsOnEditMode, cardToBeEdited, setCardToBeEdited, editCard, deleteCard}) {

    function handleNewCardClick() {
        setNewCard(true);
    }

    return (
        <div>
            <button className="new-button"
                onClick={handleNewCardClick}>
                New
            </button>
            <FlashCardsDeck cards={cards}
                isOnEditMode={isOnEditMode}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited}
                editCard={editCard}
                deleteCard={deleteCard} />
        </div>
    );
}

export default LeftPanel;
