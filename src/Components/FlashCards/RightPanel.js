import IsLearnedCardDeck from "./IsLearnedCardDeck";
import SearchBar from "./SearchBar";
import { useState } from "react";

function RightPanel({ cards, isOnSearchMode, masteredCards,
                    setIsOnSearchMode, setQuery,
                    masteredCount }) {
    
    const [isLearnedDisplay, setIsLearnedDisplay] = useState(false);

    // function countNumberOfIsLearnedCards() {
    //     const needsReviewDeck = cards.filter((card) => card.needsReview);
    //     return cards.length - needsReviewDeck.length;
    // }

    function handleDisplayLearnedCardsClick() {
        setIsLearnedDisplay(!isLearnedDisplay);
    }

    return (
        <div className="right-panel">

            <ul className="instructions">
                <li>total number of cards: {cards.length}</li>
                <li>current size of <span style={{color: "red"}}> need to review </span><span>card deck: </span> 
                     {cards.length - masteredCount}
                </li>
                <li>current size of <span style={{color: "limegreen"}}> is learned </span><span>card deck: </span> 
                     {masteredCount}
                </li>
                <li>when you feel confident that you've got the definition of a word memorized, click the checkmark 
                    <button className="button" style={{backgroundColor: "green", color: "cornsilk", padding: "4px", marginLeft: "1em", border: "1px solid green"}}>
                        ✔
                    </button>
                     to take the card off the review deck</li>
                <li>to view the cards that you think you've mastered, that is, the ones that you've checked, click here 
                    <button className="button" 
                            style={{marginLeft: "1em", backgroundColor: "green", color: "cornsilk", padding: "4px", border: "1px solid green"}}
                            onClick={handleDisplayLearnedCardsClick}>
                        is learned
                    </button>
                </li>
                <li>to restore the cards referenced in the previous line to the <span style={{color: "red"}}> need to review </span> card deck, click 
                    <button className="button" 
                            style={{marginLeft: "1em", backgroundColor: "green", color: "cornsilk", padding: "4px", border: "1px solid green"}}
                            onClick={handleDisplayLearnedCardsClick}>
                        is learned
                    </button>                    
                    then click the 
                    <button className="button" style={{backgroundColor: "maroon", color: "cornsilk", marginLeft: "1em", padding: "2px 4px 4px 4px", border: "1px solid maroon"}}>
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

            {
                isLearnedDisplay
                ?   <IsLearnedCardDeck 
                        cards={cards}
                        masteredCards={masteredCards}/>
                :   <ul className="instructions"
                        style={{display: "flex", flexWrap: "wrap", marginTop: "2em"}}>
                        <li>***************</li>
                    </ul>
            }

            {/* <div className="escutcheon">
                <div className="escutcheon-inner-0">
                    <div className="escutcheon-inner-1">
                        <div className="escutcheon-inner-2">
                            ❇
                        </div>
                    </div>
                </div>
            </div> */}
            
        </div>
    );
}

export default RightPanel;
