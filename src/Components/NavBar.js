import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink className="link" to="/">Home Page</NavLink>
            <NavLink className="link" to="/flashcards">FlashCards</NavLink>
            <NavLink className="link" to="/dictionary">Dictionary</NavLink>
            <NavLink className="link" to="/hangman">Hangman</NavLink>
        </div>
    );
}

export default NavBar;
