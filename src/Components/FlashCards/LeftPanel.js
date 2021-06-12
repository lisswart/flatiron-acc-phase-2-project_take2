import FlashCardsDeck from "./FlashCardsDeck";

function LeftPanel({ cards, isOnSearchMode, query, newCard, 
                    setNewCard, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, editCard, 
                    deleteCard}) {

    function handleNewCardClick() {
        setNewCard(!newCard);
    }

    function handleSortClickIncreasing() {
        return alert("increasing");
    }

    function handleSortClickDecreasing() {
        return alert("decreasing");
    }

    function handleSortClickByFunctionalLabel() {
        return alert("functional label");
    }

    function handleSortClickByHeadword() {
        return alert("headword");
    }

    return (
        <div className="left-panel-div">
            <div className="sort-button-div">
                <button className="sort-button"
                        onClick={handleSortClickIncreasing}>
                        Sort ↑
                </button>
                <button className="sort-button"
                        onClick={handleSortClickDecreasing}>
                        Sort ↓
                </button>
                <button className="sort-button"
                        onClick={handleSortClickByFunctionalLabel}>
                        Search by functional label
                </button>
                <button className="sort-button"
                        onClick={handleSortClickByHeadword}>
                        Search by headword
                </button>
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
            </div>
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
