import SearchBar from "./SearchBar";

function RightPanel({ cards, isOnSearchMode, setIsOnSearchMode, onSubmitQuery, handleQuerySearch }) {

    return (
        <div className="right-panel">
            <ul className="instructions">
                <li>current size of card deck: {cards.length}</li>
                <li>to add flashcards, click on the new button</li>
                <li>to cancel, click on the same button</li>
                <li>to search a specific word, enter search term below</li>
            </ul>
            <SearchBar isOnSearchMode={isOnSearchMode} 
                    setIsOnSearchMode={setIsOnSearchMode}
                    onSubmitQuery={onSubmitQuery} 
                    handleQuerySearch={handleQuerySearch} />
        </div>
    );
}

export default RightPanel;
