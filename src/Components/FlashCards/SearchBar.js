import { useState } from "react";

function SearchBar({ isOnSearchMode, setIsOnSearchMode, onSubmitQuery}) {
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
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>                
                {
                    isOnSearchMode
                    ?   <>  <input type="text" 
                                    className="inputbar inputbox" /><br></br>
                            <button className="button" 
                                    onClick={handleSearchClick}>
                                        Clear
                            </button>
                        </>
                    :   <>  <input type="text" 
                                    onChange={handleChange} 
                                    value={input} 
                                    className="inputbar inputbox" /><br></br>
                            <button className="button" 
                                    onClick={handleSearchClick}>
                                        Search by headword
                            </button>
                        </>
                }
            </form>
            
        </div>
    );
}

export default SearchBar;
