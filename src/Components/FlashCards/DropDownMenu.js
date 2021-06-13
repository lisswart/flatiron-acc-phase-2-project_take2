

function DropDownMenu({ isOnSelectMode, 
                        setIsOnSelectMode, 
                        setOnSelect }) {

    function handleSelectClick(event) {
        setIsOnSelectMode(!isOnSelectMode);
        if(isOnSelectMode) {
                event.target.value === "verb" 
            ?   setOnSelect("verb")
            :   event.target.value === "noun"
            ?   setOnSelect("noun")
            :   event.target.value === "adjective"
            ?   setOnSelect("adjective")
            :   event.target.value === "phrasal verb"
            ?   setOnSelect("phrasal verb")
            :   setOnSelect("all")
        }
    }

    return (
        <div className="drop-down-container">
            <select className="select-element" onClick={handleSelectClick}>
                <option value="all">all</option>
                <option value="verb">verb</option>
                <option value="noun">noun</option>
                <option value="adjective">adjective</option>
                <option value="phrasal verb">phrasal verb</option>
            </select>
        </div>
    );
}

export default DropDownMenu;
