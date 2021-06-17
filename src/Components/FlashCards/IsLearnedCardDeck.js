import FlashCard from "./FlashCard";

function IsLearnedCardDeck({ cards }) {    
    
    const gotIt = cards.filter(card => card.needsReview !== true);
        
    return (
        <div style={{marginTop: "2em"}}>
            <ul>
                {
                    gotIt.map((masteredCard) => {
                        // return <span key={index}>{masteredCard.headword}  |   </span>
                        return (
                            <FlashCard className="is-learned"
                            card={masteredCard} key={masteredCard.id}
                            // isOnEditMode={isOnEditMode}
                            // setIsOnEditMode={setIsOnEditMode}
                            // cardToBeEdited={cardToBeEdited}
                            // setCardToBeEdited={setCardToBeEdited}
                            // editCard={editCard}
                            // deleteCard={deleteCard}
                            // masteredCard={masteredCard}
                            // setMasteredCards={setMasteredCards} 
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default IsLearnedCardDeck;
