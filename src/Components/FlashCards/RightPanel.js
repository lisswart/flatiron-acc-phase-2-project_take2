import SearchBar from "./SearchBar";

function RightPanel({ onSubmitQuery}) {

    return (
        <div className="right-panel">
            <ul className="instructions">
                <li>To add flashcards, click on the new button on top of the left panel;</li>
                <li>to cancel, click on the same button;</li>
                <li>to search a specific word, enter search term below</li>
            </ul>
            <SearchBar onSubmitQuery={onSubmitQuery} />
        </div>
    );
}

export default RightPanel;
