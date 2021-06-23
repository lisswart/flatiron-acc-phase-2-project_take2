import { NavLink } from "react-router-dom";

function FlashCard({ index, card, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, deleteCard,
                    updateLearnedCard }) {

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

    function handleLearnedClick() {  
        const learnedCard = { 
            id: id,
            headword: headword,
            functionalLabel: functionalLabel,
            definition: definition,
            verbalIllustration: verbalIllustration,
            needsReview: false 
        };
        updateLearnedCard(id, learnedCard);
    }

    function handleNeedToReviewClick() {
        const needToReviewCard = {
            id: id,
            headword: headword,
            functionalLabel: functionalLabel,
            definition: definition,
            verbalIllustration: verbalIllustration,
            needsReview: true
        };
        updateLearnedCard(id, needToReviewCard);
    }

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
                :   <button className="button"
                            style={{backgroundColor: "maroon", color: "cornsilk", border: "1px solid maroon"}}
                            onClick={handleNeedToReviewClick}
                    >
                        Need to review !!
                    </button>
            }
        </li>
    );
}

export default FlashCard;