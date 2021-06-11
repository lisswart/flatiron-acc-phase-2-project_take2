import { NavLink } from "react-router-dom";

function FlashCard({ card, isOnEditMode, setIsOnEditMode, cardToBeEdited, setCardToBeEdited, deleteCard }) {
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
        <div className="flashcard">
            <NavLink to={`/words/${id}`} className="link-flashcard">
                <h1 style={{textAlign: "center"}} className="headword-link">{headword}</h1><br></br>
            </NavLink>
            <p>
                <i className="label">headword: </i>
                <br></br>
                <span style={{color: "darkred", fontWeight: "bolder"}}>
                    {headword}
                </span>
            </p>
            <br></br>
            <p>
                <i className="label">functional label: </i>
                <br></br>
                <span style={{color: "navy", fontWeight: "bolder"}}>
                    {functionalLabel}
                </span>
            </p>
            <br></br>
            <p>
                <i className="label">definition: </i>
                <br></br>
                <span style={{color: "darkslategrey"}}>
                    {definition}
                </span>
            </p>
            <br></br>
            <p>
                <i className="label">verbal illustration: </i>
                <br></br>
                <span style={{color: "darkslategrey"}}>
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
        </div>
    );
}

export default FlashCard;
