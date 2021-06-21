import FlashCardsDeck from "./FlashCardsDeck";
import { useState } from "react";


function LeftPanel({ cards, isOnSearchMode, 
                    isOnSortMode, setIsOnSortMode,
                    query, isNewCard, setIsNewCard, 
                    isOnEditMode, setIsOnEditMode, 
                    cardToBeEdited, setCardToBeEdited, 
                    editCard, deleteCard, setIsLearnedDisplay,
                    masteredCard, setCards }) {

    const [cardIndex, setCardIndex] = useState(0);

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
        console.log(cardIndex);
        if(cardIndex + 18 < cards.length) {
            setCardIndex((cardIndex) => (cardIndex + 18) % cards.length);
            console.log(cardIndex);
        }
    }

    function handleClickBackward() {
        console.log(cardIndex);
        if(cardIndex - 18 >= 0) {
            setCardIndex((cardIndex) => 
                (cardIndex - 18) % cards.length);
                console.log(cardIndex);
        }
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
                                create new card
                            </button>
                        </div>
                }
                <button className="sort-button">show all cards</button>
                <button className="sort-button" style={{backgroundColor: "darkgreen", border: "1px solid darkgreen"}}>show learned cards</button>
                <button className="sort-button" style={{backgroundColor: "maroon", border: "1px solid maroon"}}>show need-to-review cards</button>
                
            </div>
            <div style={{marginLeft: "2em"}}>
                
                <div className="forward-backward-buttons-container">
                    <div className="click-more-button-container">
                        <button onClick={handleClickBackward}
                                className="click-more-button">
                            ◀
                        </button>
                    </div>
                    <span style={{marginTop: "3em"}}>{cardIndex + 1} - {cardIndex + 18}</span>
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
                masteredCard={masteredCard}
                setCards={setCards} />
                
        </div>
    );
}

export default LeftPanel;
