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
                            <input  type="text" style={{marginBottom: "10px"}}
                                    className="inputbar inputbox"
                                    value=""
                                    disabled />
                            <button className="button" 
                                    onClick={handleSearchClick}>
                                        Clear
                            </button>
                        </>
                    :   <>  
                            <input  type="text" style={{marginBottom: "10px"}}
                                    onChange={handleChange} 
                                    value={input} 
                                    className="inputbar inputbox" />
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
