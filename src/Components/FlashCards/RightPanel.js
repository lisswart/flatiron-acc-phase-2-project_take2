// import IsLearnedCardDeck from "./IsLearnedCardDeck";
import SearchBar from "./SearchBar";
// import { useState } from "react";

function RightPanel({ cards, isOnSearchMode, masteredCards,
                    setIsOnSearchMode, setQuery,
                    masteredCount }) {

    function handleNoteToSelfClick() {

    }
    
    // const [isLearnedDisplay, setIsLearnedDisplay] = useState(false);

    // function countNumberOfIsLearnedCards() {
    //     const needsReviewDeck = cards.filter((card) => card.needsReview);
    //     return cards.length - needsReviewDeck.length;
    // }

    // function handleDisplayLearnedCardsClick() {
    //     setIsLearnedDisplay(!isLearnedDisplay);
    // }

    return (
        <div className="right-panel">
            <SearchBar isOnSearchMode={isOnSearchMode} 
                setIsOnSearchMode={setIsOnSearchMode}
                setQuery={setQuery} />
            
            <p className="instructions" style={{lineHeight: "1.6", paddingBottom: "2em", fontFamily: "sans-serif"}}>
                To quiz yourself on a specific word, click on the underlined headword in each card; 
                once a lone card finishes loading, hover away or toward the horizontal band that spans 
                the height of the card in order to flip the card to see the answer; click the browser 
                back button once you're done.
            </p>
            <div style={{marginLeft: "2em"}}>
                <textarea className="textarea" style={{minWidth: "18em", marginBottom: "1em"}}/><br></br>
                <button className="button"
                        onClick={handleNoteToSelfClick}
                >
                    Note to self
                </button>
            </div>
            {/* {
                isLearnedDisplay
                ?   <IsLearnedCardDeck 
                        cards={cards}
                        masteredCards={masteredCards}/>
                :   <ul className="instructions"
                        style={{display: "flex", flexWrap: "wrap", marginTop: "2em"}}>
                        <li>***************</li>
                    </ul>
            } */}

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
