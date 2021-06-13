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
                <li>to sort the cards (a-z↑) alphabetically in increasing order, click on the sort↑ button</li>
                <li>to sort the cards (a-z↓) alphabetically in decreasing order, click on the sort↓ button</li>
                <li>to quiz yourself on a specific word, click on the underlined headword in each card</li>
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
