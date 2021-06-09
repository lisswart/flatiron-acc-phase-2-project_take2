import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL = `https://hidden-harbor-11546.herokuapp.com/words`;
const LOCAL = `http://localhost:4000/words`;

function FlashCardOnView() {
    const [card, setCard] = useState({});
    const [flip, setFlip] = useState(false);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`${LOCAL}/${id}`)
            .then(r => r.json())
            .then(cardData => {
                setCard(cardData);
            })
            .catch(err => console.error(err));
    }, [id]);

    useEffect(() => {
        console.log(card);
    }, [card]);

    function handleFlipClick() {
        setFlip(!flip);
    }

    return (
        <div className="card-on-view-container">
            {
                flip
            ?    <div className="card-on-view-wrapper">
                    <p className="card-on-view-definition">:{card.definition}</p><br></br>
                    <p className="card-on-view-verbal-illustration">e.g., {card.verbalIllustration}</p>
                </div>
            :
                <div className="card-on-view-wrapper">
                    <h2 className="card-on-view-headword">{card.headword}</h2>
                    <p className="card-on-view-functional-label">{card.functionalLabel}</p>            
                    <button onClick={handleFlipClick} className="reveal-button">reveal</button>
                </div>
            }
        </div>
    );
}

export default FlashCardOnView;
