function NewFlashCardEntryForm({ addCard, isOnEntryMode, setIsOnEntryMode, formState, setFormState, setNewCard}) {

    function handleNewEntryChange(event) {
        const fieldName = event.target.name;
        const userInput = event.target.value;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const card = {
            headword: formState.headword,
            functionalLabel: formState.functionalLabel,
            definition: formState.definition,
            verbalIllustration: formState.verbalIllustration
        };
        addCard(card);
        setNewCard(false);
    }

    function handleCancelClick() {
        setIsOnEntryMode(!isOnEntryMode);
    }

    return (
        <div className="form-view">
            <form onSubmit={handleSubmit}>
                <div className="inputbox" >
                    <label><strong>headword: </strong></label>
                    <input type="text" onChange={handleNewEntryChange} name="headword" value={formState.headword} />
                </div>
                <div className="inputbox" >
                    <label><strong>functional label: </strong></label>
                    <input type="text" onChange={handleNewEntryChange} name="functionalLabel" value={formState.functionalLabel} />
                </div>
                <div className="inputbox" >
                    <label><strong>definition: </strong></label>
                    <textarea onChange={handleNewEntryChange} name="definition" value={formState.definition} />
                </div>
                <div  className="inputbox">
                    <label><strong>verbal illustration: </strong></label>
                    <textarea onChange={handleNewEntryChange} name="verbalIllustration" value={formState.verbalIllustration} />
                </div>
                <button type="submit">Submit</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </form>
            
        </div>
    );
}

export default NewFlashCardEntryForm;