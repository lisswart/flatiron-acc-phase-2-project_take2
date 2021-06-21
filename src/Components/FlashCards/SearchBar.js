import { useState } from "react";

function SearchBar({ isOnSearchMode, setIsOnSearchMode, setQuery}) {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSearchClick() {
        setIsOnSearchMode((isOnSearchMode) => !isOnSearchMode);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setQuery(input);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>                
                {
                    isOnSearchMode
                    ?   <>  
                            <input  type="text" 
                                    className="inputbar inputbox"
                                    onChange={handleChange}
                                    value="" /><br></br>
                            <button className="button" 
                                    onClick={handleSearchClick}>
                                        Clear
                            </button>
                        </>
                    :   <>  
                            <input  type="text" required
                                    onChange={handleChange} 
                                    value={input} 
                                    className="inputbar inputbox" /><br></br>
                            <button className="button" 
                                    onClick={handleSearchClick}>
                                        Search card deck by headword
                            </button>
                        </>
                }
            </form>
            
        </div>
    );
}

export default SearchBar;
