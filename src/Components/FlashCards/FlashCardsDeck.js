import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, isOnSearchMode, query, isOnEditMode, 
                        setIsOnEditMode, cardToBeEdited, 
                        setCardToBeEdited, editCard, 
                        deleteCard }) {

    function displayCards() {
        return cards.map((card) => {
            return (
                <FlashCard card={card} key={card.id}
                    isOnEditMode={isOnEditMode}
                    setIsOnEditMode={setIsOnEditMode}
                    cardToBeEdited={cardToBeEdited}
                    setCardToBeEdited={setCardToBeEdited}
                    editCard={editCard}
                    deleteCard={deleteCard} />
            );
        });
    }

    function isMatched(card) {
        return card.headword === query.toString();
    }

    function displayMatchedCards() {
        const filteredCards = cards.filter(isMatched);
        return filteredCards.map(card => {
            return (
                Object.keys(card).length === 0
                ?   <div className="no-match">
                        <>No match found</><br></br>
                        <div style={{color: "orange"}}>(˘･_･˘)</div>
                    </div>     
                :   <FlashCard card={card} key={card.id}
                        isOnEditMode={isOnEditMode}
                        setIsOnEditMode={setIsOnEditMode}
                        cardToBeEdited={cardToBeEdited}
                        setCardToBeEdited={setCardToBeEdited}
                        editCard={editCard}
                        deleteCard={deleteCard} />           
            );
        });        
    }

    return (
        <ol className="card-list">
            {
                cards.length === 0
                ?   <div className="loading-flashcard">Loading...</div>
                :   isOnSearchMode
                ?   (
                        cards.filter(isMatched)
                        ?   displayMatchedCards()
                        :   <div className="no-match">
                                <>No match found</>
                                <pre style={{color: "orange"}}>   (˘･_･˘)</pre>
                            </div> 
                    )   
                :   displayCards()
            }
        </ol>
    );
}

export default FlashCardsDeck;
