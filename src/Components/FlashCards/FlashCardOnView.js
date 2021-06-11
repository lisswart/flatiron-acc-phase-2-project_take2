import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = `https://hidden-harbor-11546.herokuapp.com/words`;
//const LOCAL = `http://localhost:4000/words`;

function FlashCardOnView() {
    const [card, setCard] = useState({});
    const [flip, setFlip] = useState(false);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`${URL}/${id}`)
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
                Object.keys(card).length === 0
                ?   <div className="loading">Loading...</div>
                :   flip
                ?   <div className="card-on-view-wrapper">
                        <div className="card-on-view-inner">
                            <div className="card-on-view-front">
                                <p className="card-on-view-definition"><span style={{color: "yellow", fontWeight: "bolder"}}>:</span>{card.definition}</p><br></br>
                                <p className="card-on-view-verbal-illustration"><span style={{color: "yellow"}}>e.g., </span>{card.verbalIllustration}</p>
                                <button onClick={handleFlipClick} className="reveal-button">reverse</button>
                            </div>
                        </div>
                    </div>              
                :   <div className="card-on-view-wrapper">
                        <div className="card-on-view-inner">
                            <div className="card-on-view-back">
                                <h2 className="card-on-view-headword">{card.headword}</h2>
                                <p className="card-on-view-functional-label">{card.functionalLabel}</p>            
                                <button onClick={handleFlipClick} className="reveal-button">reveal</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default FlashCardOnView;
