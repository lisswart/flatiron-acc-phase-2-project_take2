import { useState } from "react";

function SearchBar({ isOnSearchMode, setIsOnSearchMode, setQuery}) {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSearchClick() {
        setIsOnSearchMode(true);
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
                                    value=""
                                    disabled /><br></br>
                            <button className="button" 
                                    onClick={handleSearchClick}>
                                        Clear
                            </button>
                        </>
                    :   <>  
                            <input  type="text"
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
