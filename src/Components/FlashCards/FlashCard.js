import { NavLink } from "react-router-dom";

function FlashCard({ index, card, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, deleteCard,
                    masteredCard, setCards }) {

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

    // function handleReviewedClick() {
    //     const reviewedCard = { 
    //         headword: headword,
    //         functionalLabel: functionalLabel,
    //         definition: definition,
    //         verbalIllustration: verbalIllustration,
    //         needsReview: false };
    //     masteredCard(id, reviewedCard);
    //     // setMasteredCards(reviewedCard);
    // }

    // function handleRestoreClick() {
    //     const reviewedCard = { 
    //         headword: headword,
    //         functionalLabel: functionalLabel,
    //         definition: definition,
    //         verbalIllustration: verbalIllustration,
    //         needsReview: true };
    //     setCards(reviewedCard);
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
            <button className="button" 
                    style={{backgroundColor: "green", color: "cornsilk", border: "1px solid green"}} 
                    // onClick={handleReviewedClick}
            >
                Learned ✔
            </button>
            <button className="button"
                    style={{backgroundColor: "brown", color: "cornsilk", border: "1px solid brown"}}
                    // onClick={{handleRestoreClick}}
            >
                Need to review !!
            </button>
            
        </li>
    );
}

export default FlashCard;