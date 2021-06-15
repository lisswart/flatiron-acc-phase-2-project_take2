import SearchBar from "./SearchBar";

function RightPanel({ cards, isOnSearchMode, 
                    setIsOnSearchMode, setQuery,
                    masteredCards }) {

    function countNumberOfIsLearnedCards() {
        const needsReviewDeck = cards.filter((card) => card.needsReview);
        return cards.length - needsReviewDeck.length;
    }

    return (
        <div className="right-panel">

            <ul className="instructions">
                <li>current size of <span style={{backgroundColor: "moccasin", color: "maroon"}}>[need to review]</span> card deck: {cards.length - countNumberOfIsLearnedCards()}</li>
                <li>current size of <span style={{backgroundColor: "moccasin", color: "green"}}>[is learned]</span> card deck: {countNumberOfIsLearnedCards()}</li>
                <li>when you feel confident that you've got the definition of a word memorized, click the checkmark to take the card off the review deck</li>
                <li>to view the cards that you think you've mastered, click here 
                    <button className="button" style={{marginLeft: "1em", backgroundColor: "green", color: "cornsilk", padding: "4px", border: "1px solid green"}}>
                        is learned
                    </button>
                </li>
                <li>to restore the cards referenced in the previous line, click the 
                    <button className="button" style={{backgroundColor: "maroon", color: "cornsilk", marginLeft: "1em", padding: "4px", border: "1px solid maroon"}}>
                        ✖
                    </button>
                    on the card
                </li>
                <li>to add flashcards, click on the new button</li>
                <li>to cancel, click on the same button</li>
                <li>to sort the cards (a-z↑) alphabetically in increasing order, click on the sort↑ button</li>
                <li>to sort the cards (a-z↓) alphabetically in decreasing order, click on the sort↓ button</li>
                <li>to quiz yourself on a specific word, click on the underlined headword in each card; once a lone card finishes loading, hover away or toward the horizontal band that spans the height of the card in order to flip the card to see the answer</li>
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
