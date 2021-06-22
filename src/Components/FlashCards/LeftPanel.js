import FlashCardsDeck from "./FlashCardsDeck";
import { useState, useEffect } from "react";


function LeftPanel({ cards, isOnSearchMode, 
                    isOnSortMode, setIsOnSortMode,
                    query, isNewCard, setIsNewCard, 
                    isOnEditMode, setIsOnEditMode, 
                    cardToBeEdited, setCardToBeEdited, learnedCards, setLearnedCards,
                    updateLearnedCard, updateNeedToReviewCards, needToReviewCards, setNeedToReviewCards,
                    countOfLearnedCards, setCountOfLearnedCards, editCard, deleteCard, setCards }) {

    const [cardIndex, setCardIndex] = useState(0);    
    const [wantToViewLearnedCards, setWantToViewLearnedCards] = useState(false);
    const [wantToViewNeedToReviewCards, setWantToViewNeedToReviewCards] = useState(false);

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
    useEffect(() => {
        console.log("needs review: ","\n", needsReview, "\n", needsReview.false, needsReview.true); // => {} undefined undefined, then after a few seconds, promise is fulfilled
        // console.log(needsReview.length);  //on first render, 
        // this line throws an error, since learnedCards_1 is still an empty object
        // as it depends on cards, whose completion is asynchronous
        // likewise, for the following line
        // setCountOfLearnedCards((learnedCards_1.false).length);
        console.log(countOfLearnedCards); // => 0
    }, [needsReview, countOfLearnedCards]);

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
                <button className="sort-button"
                        onClick={handleViewAllCardsClick}>All: {cards.length} cards</button>               
                {
                    cards.length === 0
                    ?   <button className="sort-button" style={{backgroundColor: "darkgreen", border: "1px solid darkgreen"}}>
                            Loading...
                        </button>
                    :   <><button className="sort-button" style={{backgroundColor: "darkgreen", border: "1px solid darkgreen"}}
                                onClick={handleViewLearnedCardsClick}>
                            Learned: {cards.length - (needsReview.true).length} cards
                        </button>
                        <button className="sort-button" style={{backgroundColor: "maroon", border: "1px solid maroon"}}
                                onClick={handleViewNeedToReviewCardsClick}>
                            Need-to-review: {(needsReview.true).length} cards
                        </button></>                        
                }
                
            </div>
            <div style={{marginLeft: "2em"}}>
                
                <div className="forward-backward-buttons-container">
                    <div className="click-more-button-container">
                        <button onClick={handleClickBackward}
                                className="click-more-button">
                            ◀
                        </button>
                    </div>
                    {
                        (cards.length === 0)
                        ?   <></>
                        :   (cardIndex + 6) >= cards.length
                        ?   <span style={{marginTop: "3em"}}>{cardIndex + 1} - {cards.length}</span>
                        :   <span style={{marginTop: "3em"}}>{cardIndex + 1} - {cardIndex + 6}</span>
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
                isOnEditMode={isOnEditMode}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited}
                editCard={editCard}
                deleteCard={deleteCard}
                learnedCards={learnedCards}
                setLearnedCards={setLearnedCards}
                updateLearnedCard={updateLearnedCard}
                countOfLearnedCards={countOfLearnedCards}
                setCountOfLearnedCards={setCountOfLearnedCards}
                wantToViewLearnedCards={wantToViewLearnedCards}
                needToReviewCards={needToReviewCards}
                setNeedToReviewCards={setNeedToReviewCards}
                updateNeedToReviewCards={updateNeedToReviewCards}
                wantToViewNeedToReviewCards={wantToViewNeedToReviewCards}
                setCards={setCards} />
                
        </div>
    );
}

export default LeftPanel;
