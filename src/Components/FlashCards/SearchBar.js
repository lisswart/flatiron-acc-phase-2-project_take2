import { useState } from "react";

function SearchBar({ isOnSearchMode, setIsOnSearchMode, onSubmitQuery, handleQuerySearch}) {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSearchClick() {
        setIsOnSearchMode(!isOnSearchMode);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(input);
        handleQuerySearch();
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>                
                {
                    isOnSearchMode
                    ?   <><input type="text" value="" className="inputbar inputbox" /><br></br>
                        <button className="button" onClick={handleSearchClick}>Clear</button></>
                    :   <><input type="text" onChange={handleChange} value={input} className="inputbar inputbox" /><br></br>
                        <button className="button" onClick={handleSearchClick}>Search</button></>
                }
            </form>
            
        </div>
    );
}

export default SearchBar;
