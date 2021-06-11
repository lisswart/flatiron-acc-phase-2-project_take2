import "./Hangman.css";

function HangmanContainer() {
    return (
        <div className="hangman-header">
            <h1>Hangman</h1>
            <p>Find the hidden word - Enter a letter</p>
            <div className="game-container">
                <svg className="figure-container" 
                height="250" width="200">
                    {/* <!--Rod--> */}
                    <line x1="60" y1="20" x2="140" y2="20" />
                    <line x1="140" y1="20" x2="140" y2="50" />
                    <line x1="60" y1="20" x2="60" y2="230" />
                    <line x1="20" y1="230" x2="100" y2="230" />

                    {/* <!-- Head --> */}
                    <circle cx="140" cy="70" r="20" class="figure-part" />

                    {/* <!-- Body --> */}
                    <line x1="140" y1="90" x2="140" y2="150" class="figure-part" />

                    {/* <!-- Arms --> */}
                    <line x1="140" y1="120" x2="120" y2="100" class="figure-part" />
                    <line x1="140" y1="120" x2="160" y2="100" class="figure-part" />

                    {/* <!-- Fingers --> */}
                    <line x1="120" y1="100" x2="100" y2="110" class="figure-part" />
                    <line x1="120" y1="100" x2="118" y2="75" class="figure-part" />
                    {/* <!-- <line x1="120" y1="100" x2="" y2="" />
                    <line x1="120" y1="100" x2="" y2="" />
                    <line x1="120" y1="100" x2="" y2="" /> -->
                    <!-- <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" /> --> */}

                    {/* <!-- Legs --> */}
                    <line x1="140" y1="150" x2="120" y2="180" class="figure-part" />
                    <line x1="140" y1="150" x2="160" y2="180" class="figure-part" />

                    {/* <!-- Toes --> */}
                    {/* <!-- <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" />
                    <line x1="" y1="" x2="" y2="" /> --> */}
                </svg>

                <div className="wrong-letters-container">
                    <div id="wrong-letters"></div>
                </div>

                <div className="word" id="word">
                    
                </div>
            </div>

            {/* <!-- Container for final messages --> */}
            <div className="popup-container" id="popup-container">
                <div className="popup button">
                    <h2 id="final-message">.</h2>
                    <button id="play-button">Play Again</button>
                </div>
            </div>

            {/* <!-- Notification --> */}
            <div className="notification-container" id="notification-container">
                <p>You have already entered this letter</p>
            </div>
        </div>
    );
}

export default HangmanContainer;
