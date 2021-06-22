import { NavLink } from "react-router-dom";

function FlashCard({ index, card, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, deleteCard,
                    learnedCards, setLearnedCards,
                    updateLearnedCard, updateNeedToReviewCards,
                    needToReviewCards, setNeedToReviewCards,
                    setCards }) {

    const {id, headword, functionalLabel, definition, verbalIllustration} = card;    

    function handleEditClick() {
        setIsOnEditMode(!isOnEditMode);
        setCardToBeEdited({
            ...cardToBeEdited,
            id: id,
            headword: headword,
            functionalLabel: functionalLabel
        });
    }

    function handleDeleteClick() {
        deleteCard(id);
    }

    function handleLearnedClick() {  //when I click the learned ✔ button on a card, I switch its needsReview property from true to false and then post the updated card to my database
        const learnedCard = { 
            id: id,
            headword: headword,
            functionalLabel: functionalLabel,
            definition: definition,
            verbalIllustration: verbalIllustration,
            needsReview: false 
        };
        // setLearnedCards([...learnedCards, learnedCard]);
        updateLearnedCard(id, learnedCard);
    }

    // function handleNeedToReviewClick() {
    //     const needToReviewCard = {
    //         id: id,
    //         needsReview: true 
    //     };
    //     // setNeedToReviewCards([...needToReviewCards, needToReviewCard]);
    //     updateNeedToReviewCards(id, needToReviewCard);
    // }

    return (
        <li className="flashcard" id={index}>

            <NavLink to={`/words/${id}`}>
                <div className="link-flashcard">
                    <pre style={{color: "tomato", fontWeight: "bolder"}}>
                        {headword}     
                    </pre>
                    <span style={{color: "powderblue", fontWeight: "bolder"}}>
                        {functionalLabel}
                    </span>
                </div>
            </NavLink>
            
            <p>
                <i className="label-definition">definition: </i>
                <br></br>
                <span style={{color: "lemonchiffon"}}>
                    {definition}
                </span>
            </p>
            <br></br>
            <p>
                <i className="label-definition">verbal illustration: </i>
                <br></br>
                <span style={{color: "lemonchiffon"}}>
                    {verbalIllustration}
                </span>
            </p>
            <br></br>
            <button className="button" onClick={handleEditClick}>
                Edit 📝
            </button>
            <button className="button" style={{marginBottom: "1em"}} onClick={handleDeleteClick}>
                Delete 🗑
            </button>
            {
                card.needsReview === true
                ?   <button className="button" 
                            style={{backgroundColor: "darkgreen", color: "cornsilk", border: "1px solid darkgreen"}} 
                            onClick={handleLearnedClick}
                    >
                        Learned ✔
                    </button>
                :   <></>
            }
            {
                card.needsReview === false
                ?    <button className="button"
                            style={{backgroundColor: "maroon", color: "cornsilk", border: "1px solid maroon"}}
                            // onClick={{handleNeedToReviewClick}}
                    >
                        Need to review !!
                    </button>
                :   <></>
            }
        </li>
    );
}

export default FlashCard;