import FlashCardsDeck from "./FlashCardsDeck";
import { useState } from "react";


function LeftPanel({ cards, isOnSearchMode, 
                    isOnSortMode, setIsOnSortMode,
                    query, isNewCard, setIsNewCard, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, editCard, 
                    deleteCard, setCards }) {

    const [cardIndex, setCardIndex] = useState(0);    
    const [wantToViewLearnedCards, setWantToViewLearnedCards] = useState(false);
    const [wantToViewNeedToReviewCards, setWantToViewNeedToReviewCards] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    function handleNewCardClick() {
        setIsNewCard(!isNewCard);
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
    }

    // function handleClickMore() {
        // if(wantToViewLearnedCards) {
        //     // if(needsReview.false) {
        //         // if((cardIndex) >= (needsReview.false).length) {
        //         //     return;
        //         // }
        //         // else
        //          if(cardIndex + 6 < (needsReview.false).length) {
        //             setCardIndex(cardIndex => (cardIndex + 6) % (needsReview.false).length);
        //         }
        //     // }
        // }
        // if(wantToViewNeedToReviewCards) {
        //     // if((cardIndex) >= (needsReview.true).length) {
        //     //     return;
        //     // }
        //     // else
        //      if(cardIndex + 6 < (needsReview.true).length) {
        //         setCardIndex(cardIndex => (cardIndex + 6) % (needsReview.true).length);
        //     }
        // }
        // if(isOnSearchMode) {
        //     if(searchResults) {
        //         if(cardIndex - 6 < searchResults.length) {
        //             setCardIndex(cardIndex => (cardIndex + 6) % searchResults.length);
        //         }
        //     }
        // }
        // if(cardIndex + 6 < cards.length) {
        //     setCardIndex((cardIndex) => (cardIndex + 6) % cards.length);
        // }
    // }

    function handleClickMore() {
        if(cardIndex + 6 < cards.length) {
            setCardIndex((cardIndex) => (cardIndex + 6) % cards.length);
        }
    }


    function handleClickBackward() {
        if(cardIndex - 6 >= 0) {
            setCardIndex((cardIndex) => (cardIndex - 6) % cards.length);
        }
    }

    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, currObj) => {
            let key = currObj[property];
            if(!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(currObj);
            return acc;
        }, {});
    }

    const needsReview = groupBy(cards, "needsReview");  // an object with two keys: false, true
    // => {false:[{...}, ..., {...}], true: [{...}, ..., {...}]}
    
    function handleViewAllCardsClick() {
        setWantToViewLearnedCards(false);
        setWantToViewNeedToReviewCards(false);
    }

    function handleViewLearnedCardsClick() {
        setWantToViewLearnedCards(true);
        setWantToViewNeedToReviewCards(false);
    }

    function handleViewNeedToReviewCardsClick() {
        setWantToViewLearnedCards(false);
        setWantToViewNeedToReviewCards(true);
    }

    return (
        <div className="left-panel-div">

            <div className="sort-button-div">
                <button className="sort-button"
                        onClick={handleSortClickIncreasing}>
                        <pre>Sort a-z↑</pre>
                </button>
                <button className="sort-button"
                        onClick={handleSortClickDecreasing}>
                        <pre>Sort a-z↓</pre>
                </button>
                {
                    isNewCard
                    ?   <div className="new-button-div">
                            <button className="new-button"
                                    onClick={handleNewCardClick}>
                                Cancel
                            </button>
                        </div>
                    :   <div className="new-button-div">
                            <button className="new-button"
                                    onClick={handleNewCardClick}>
                                Create new card
                            </button>
                        </div>
                }                             
                {
                    cards.length === 0
                    ?   <button className="sort-button" onClick={handleViewAllCardsClick}>
                            Loading...
                        </button>
                    :   <button className="sort-button" onClick={handleViewAllCardsClick}>
                            All: {cards.length} cards
                        </button>  
                }
                {
                    cards.length === 0
                    ?   <button className="sort-button" style={{backgroundColor: "darkgreen", border: "1px solid darkgreen"}}>
                            Loading...
                        </button>
                    :   <>
                            <button className="sort-button" style={{backgroundColor: "darkgreen", border: "1px solid darkgreen"}}
                                    onClick={handleViewLearnedCardsClick}
                            >
                                Learned:    {   needsReview.false
                                                ?   (needsReview.false).length
                                                :   0
                                            }   cards
                            </button>
                            <button className="sort-button" style={{backgroundColor: "maroon", border: "1px solid maroon"}}
                                    onClick={handleViewNeedToReviewCardsClick}>
                                Need-to-review:     {   needsReview.true
                                                        ?   (needsReview.true).length
                                                        :   0
                                                    } cards
                            </button>
                        </>                        
                }
                
            </div>
            <div style={{marginLeft: "2em"}}>
                
                <div className="forward-backward-buttons-container">
                {
                    wantToViewLearnedCards
                    ?   <>
                            <div style={{display: "flex", alignItems: "center"}}>Learned Deck</div>
                        </>
                    :   wantToViewNeedToReviewCards
                    ?   <>
                            <div style={{display: "flex", alignItems: "center"}}>Need-to-Review Deck</div>
                        </>
                    :   isOnSearchMode
                    ?   <>
                            <div style={{display: "flex", alignItems: "center"}}>Search Results</div>
                        </>
                    :   <>
                            <div style={{display: "flex", alignItems: "center"}}>Full Deck</div>
                        </>
                }
                    <div className="click-more-button-container">
                        <button onClick={handleClickBackward}
                                className="click-more-button">
                            ◀
                        </button>
                    </div>
                    {
                        (cards.length === 0)
                        ?   <div style={{display: "flex", alignItems: "center"}}>
                                Loading...
                            </div>
                        :   wantToViewLearnedCards
                        ?   <div style={{display: "flex", alignItems: "center"}}>
                                {   needsReview.false
                                    ?   <div style={{display: "flex", alignItems: "center"}}>
                                            {
                                                (cardIndex + 6) >= (needsReview.false).length
                                                ?   <span>{cardIndex + 1} - {(needsReview.false).length}</span>
                                                :   <span>{cardIndex + 1} - {cardIndex + 6}</span>
                                            }
                                        </div>
                                    :   <div>0</div>
                                }
                            </div>
                        :   wantToViewNeedToReviewCards
                        ?   <div style={{display: "flex", alignItems: "center"}}>
                                {   needsReview.true
                                    ?   <div style={{display: "flex", alignItems: "center"}}>
                                            {
                                                (cardIndex + 6) >= (needsReview.true).length
                                                ?   <span>{cardIndex + 1} - {(needsReview.true).length}</span>
                                                :   <span>{cardIndex + 1} - {cardIndex + 6}</span>
                                            }
                                        </div>
                                    :   <div>0</div>
                                }
                            </div>
                        :   isOnSearchMode
                        ?   <div style={{display: "flex", alignItems: "center"}}>
                                <span>{cardIndex + 1} - {cards.length}</span>
                            </div>
                        :   <div style={{display: "flex", alignItems: "center"}}>
                                {
                                    (cardIndex + 6) >= cards.length
                                    ?   <span>{cardIndex + 1} - {cards.length}</span>
                                    :   <span>{cardIndex + 1} - {cardIndex + 6}</span>
                                }
                            </div>
                    }                    
                    <div className="click-more-button-container">
                        <button onClick={handleClickMore}
                                className="click-more-button">
                            ▶
                        </button>
                    </div>
                </div> 
            </div>

            <FlashCardsDeck cards={cards}
                cardIndex={cardIndex}
                isOnSearchMode={isOnSearchMode}
                query={query}
                handleSortClickIncreasing={handleSortClickIncreasing}
                handleSortClickDecreasing={handleSortClickDecreasing}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited}
                editCard={editCard}
                deleteCard={deleteCard}                
                wantToViewLearnedCards={wantToViewLearnedCards}                
                wantToViewNeedToReviewCards={wantToViewNeedToReviewCards}
                setSearchResults={setSearchResults}
                searchResults={searchResults}
                setCards={setCards} />
                
        </div>
    );
}

export default LeftPanel;
