

function EditForm({ editFormState, setEditFormState, 
                    cardToBeEdited, isOnEditMode, 
                    setIsOnEditMode, editCard }) {

    function handleChange(event) {
        const fieldName = event.target.name;
        const userInput = event.target.value;
        setEditFormState({
            ...editFormState,
            [fieldName]: userInput
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const editedCard = {
            headword: cardToBeEdited.headword,
            functionalLabel: cardToBeEdited.functionalLabel,
            definition: editFormState.definition,
            verbalIllustration: editFormState.verbalIllustration,
        };
        editCard(cardToBeEdited.id, editedCard);
        setIsOnEditMode(false);
        setEditFormState({
            headword: "",
            functionalLabel: "",
            definition: "",
            verbalIllustration: ""
        });
    }

    function handleCancelClick() {
        setIsOnEditMode(!isOnEditMode);
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit} className="form-view">
                <div className="inputbox label" >
                    <strong>headword: </strong>
                    <span style={{color: "moccasin"}}>
                        {cardToBeEdited.headword}
                    </span>
                </div>
                <div className="inputbox label" >
                    <strong>functional label: </strong>
                    <span style={{color: "moccasin"}}>
                        {cardToBeEdited.functionalLabel}
                    </span>
                </div>
                <div className="inputbox label" >
                    <label><strong>definition: </strong></label>
                    <textarea onChange={handleChange} 
                        name="definition" 
                        value={editFormState.definition}
                        className="textarea" />
                </div>
                <div  className="inputbox label">
                    <label><strong>verbal illustration: </strong></label>
                    <textarea onChange={handleChange} 
                        name="verbalIllustration" 
                        value={editFormState.verbalIllustration}
                        className="textarea" />
                </div>
                <div style={{display: "flex"}}>
                    <button onClick={handleCancelClick}
                        className="button" style={{marginTop: "1em"}}>
                        Cancel
                    </button>
                    <button type="submit"
                        className="button" style={{marginTop: "1em"}}>
                        Submit
                    </button>
                </div>
            </form>

            <div className="escutcheon">
                <div className="escutcheon-inner-0">
                    <div className="escutcheon-inner-1">
                        <div className="escutcheon-inner-2" id="edit">
                            ヽ(✿ﾟ▽ﾟ)ノ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditForm;
