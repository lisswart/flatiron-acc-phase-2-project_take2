import FlashCardsDeck from "./FlashCardsDeck";

function LeftPanel({ cards, isOnSearchMode, 
                    isOnSortMode, setIsOnSortMode,
                    isOnSelectMode, setIsOnSelectMode,
                    onSelect, query, newCard, 
                    setNewCard, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, editCard, 
                    deleteCard}) {

    function handleNewCardClick() {
        setNewCard(!newCard);
    }

    function handleSortClickIncreasing() {
        setIsOnSortMode(!isOnSortMode);
        sortIncreasing();
    }

    function sortIncreasing() {
        cards.sort((a,b) => {
            let ha = a.headword.toLowerCase();
            let hb = b.headword.toLowerCase();

            if(ha < hb) {
                return -1;
            }
            if(ha > hb) {
                return 1;
            }
            return 0;
        });
        console.log(cards);
    }

    function handleSortClickDecreasing() {
        setIsOnSortMode(!isOnSortMode);
        sortDecreasing();
    }

    function sortDecreasing() {
        cards.sort((a,b) => {
            let ha = a.headword.toLowerCase();
            let hb = b.headword.toLowerCase();

            if(ha < hb) {
                return 1;
            }
            if(ha > hb) {
                return -1;
            }
            return 0;
        });
        console.log(cards);
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
                handleSortClickIncreasing={handleSortClickIncreasing}
                handleSortClickDecreasing={handleSortClickDecreasing}
                // isOnSelectMode={isOnSelectMode}
                // setIsOnSelectMode={setIsOnSelectMode}
                // onSelect={onSelect}
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
