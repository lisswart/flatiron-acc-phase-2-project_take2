import SearchBar from "./SearchBar";

function RightPanel({ cards, isOnSearchMode, 
                    setIsOnSearchMode, setQuery }) {

    return (
        <div className="right-panel">

            <ul className="instructions">
                <li>current size of card deck: {cards.length}</li>
                <li>to add flashcards, click on the new button</li>
                <li>to cancel, click on the same button</li>
                <li>to sort the cards (a-z↑) alphabetically in increasing order, click on the sort↑ button</li>
                <li>to sort the cards (a-z↓) alphabetically in decreasing order, click on the sort↓ button</li>
                <li>to quiz yourself on a specific word, click on the underlined headword in each card; once a lone card finishes loading, hover away or toward the card in order to flip the card to see the answer</li>
                <li>to search a specific word, enter search term below</li>
                <li>when running multiple searches, after every search, click the clear button to reset before running another search</li>
            </ul>

            <SearchBar isOnSearchMode={isOnSearchMode} 
                setIsOnSearchMode={setIsOnSearchMode}
                setQuery={setQuery} />

            <div className="escutcheon">
                <div className="escutcheon-inner-0">
                    <div className="escutcheon-inner-1">
                        <div className="escutcheon-inner-2">
                            ❇
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default RightPanel;
