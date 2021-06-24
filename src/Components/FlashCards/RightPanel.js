import SearchBar from "./SearchBar";

function RightPanel({ isOnSearchMode, 
                    setIsOnSearchMode, setQuery}) {

    function handleNoteToSelfClick() {

    }

    return (
        <div className="right-panel">
            <SearchBar isOnSearchMode={isOnSearchMode} 
                setIsOnSearchMode={setIsOnSearchMode}
                setQuery={setQuery} />

            <div style={{marginTop: "2em"}}>
                <textarea className="textarea" style={{marginBottom: "2px", minWidth: "300px", minHeight: "496px", backgroundColor: "black", color: "lemonchiffon"}}/><br></br>
                <button className="button"
                        onClick={handleNoteToSelfClick}
                >
                    Note to self
                </button>
            </div>            
        </div>
    );
}

export default RightPanel;
