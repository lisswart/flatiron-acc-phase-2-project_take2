import { NavLink } from "react-router-dom";

function FlashCard({ index, card, isOnEditMode, 
                    setIsOnEditMode, cardToBeEdited, 
                    setCardToBeEdited, deleteCard }) {
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
            
        </li>
    );
}

export default FlashCard;