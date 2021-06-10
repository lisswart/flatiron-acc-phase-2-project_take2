import FlashCardsDeck from "./FlashCardsDeck";

function LeftPanel({ cards, newCard, setNewCard, isOnEditMode, setIsOnEditMode, cardToBeEdited, setCardToBeEdited, editCard, deleteCard}) {

    function handleNewCardClick() {
        setNewCard(!newCard);
    }

    return (
        <div className="left-panel-div">
            <div className="new-button-div"><button className="new-button"
                onClick={handleNewCardClick}>
                New
            </button></div>
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
