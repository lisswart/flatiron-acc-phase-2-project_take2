import { NavLink } from "react-router-dom";

function FlashCard({ index, card, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, deleteCard,
                    masteredCard 
                    }) {

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

    function handleReviewedClick() {
        const reviewedCard = { 
            headword: headword,
            functionalLabel: functionalLabel,
            definition: definition,
            verbalIllustration: verbalIllustration,
            needsReview: false };
        masteredCard(id, reviewedCard);
    }

    return (
        <li className="flashcard" id={index}>

            <NavLink to={`/words/${id}`}>
                <div className="link-flashcard">
                    <pre style={{color: "rgb(105, 1, 1)", fontWeight: "bolder"}}>
                        {headword}     
                    </pre>
                    <span style={{color: "navy", fontWeight: "bolder"}}>
                        {functionalLabel}
                    </span>
                </div>
            </NavLink>
            
            <p>
                <i className="label-definition">definition: </i>
                <br></br>
                <span style={{color: "black"}}>
                    {definition}
                </span>
            </p>
            <br></br>
            <p>
                <i className="label-definition">verbal illustration: </i>
                <br></br>
                <span style={{color: "black"}}>
                    {verbalIllustration}
                </span>
            </p>
            <br></br>
            <button className="button" onClick={handleEditClick}>
                Edit
            </button>
            <button className="button" style={{marginBottom: "1em"}} onClick={handleDeleteClick}>
                Delete
            </button>
            <button className="button" style={{backgroundColor: "green", color: "cornsilk"}} onClick={handleReviewedClick}>
                ✔
            </button>
            
        </li>
    );
}

export default FlashCard;