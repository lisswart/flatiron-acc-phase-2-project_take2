import SearchBar from "./SearchBar";
// import DropDownMenu from "./DropDownMenu";

function RightPanel({ cards, isOnSearchMode, 
                    setIsOnSearchMode, onSubmitQuery, 
                    isOnSelectMode, setIsOnSelectMode, 
                    setOnSelect }) {

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
                onSubmitQuery={onSubmitQuery} />
            <ul className="instructions">
                {/* <li>to search by functional label, select from the dropdown below</li> */}
            </ul>
            {/* <DropDownMenu 
                isOnSelectMode={isOnSelectMode}
                setIsOnSelectMode={setIsOnSelectMode}
                setOnSelect={setOnSelect} /> */}
        </div>
    );
}

export default RightPanel;
