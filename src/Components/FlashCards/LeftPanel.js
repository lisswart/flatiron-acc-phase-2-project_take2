import FlashCardsDeck from "./FlashCardsDeck";

function LeftPanel({ cards, isOnSearchMode, query, newCard, 
                    setNewCard, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, editCard, 
                    deleteCard}) {

    function handleNewCardClick() {
        setNewCard(!newCard);
    }

    return (
        <div className="left-panel-div">
            <div className="sort-button-div">
                <button className="sort-button">Sort ↑</button>
                <button className="sort-button">Sort ↓</button>
                <button className="sort-button">Search by functional label</button>
                <button className="sort-button">Search by headword</button>
            </div>
            {
                newCard
                ? <div className="new-button-div"><button className="new-button"
                    onClick={handleNewCardClick}>
                    Cancel
                </button></div>
                : <div className="new-button-div"><button className="new-button"
                    onClick={handleNewCardClick}>
                    New
                </button></div>
            }
            <FlashCardsDeck cards={cards}
                isOnSearchMode={isOnSearchMode}
                query={query}
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
