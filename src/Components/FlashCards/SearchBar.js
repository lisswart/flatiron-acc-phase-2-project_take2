import { useState } from "react";

function SearchBar({ onSubmitQuery, handleQuerySearch}) {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(input);
        handleQuerySearch();
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={input} className="inputbar inputbox" /><br></br>
                <input type="submit" className="button" />
            </form>
            
        </div>
    );
}

export default SearchBar;
