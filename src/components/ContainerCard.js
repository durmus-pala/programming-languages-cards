import React from 'react';
import {useState} from 'react';


const ContainerCard = (props) => {
    const [hover, setHover] = useState(false);
    const [flip, setFlip] = useState(false);

    const handleHover = () => {
        setHover(true);
    }

    const hanleHoverRes = () => {
        setHover(false);
    }
    const handleClick = () => {
        setFlip(!flip);
    }
    return (
        <div>
            <div className={`langs ${hover ? 'hover' : null} ${flip ? 'flip' : null}`} 
            onClick = {handleClick}
            onMouseEnter = {handleHover}
            onMouseLeave = {hanleHoverRes}
            >
                
                {!flip ? (
                    <div className="front">
                    <img className="logo" src={props.logo} alt="" />
                    <div className="desc">{props.name}</div>
                    </div>

                ) : (
                    <div>
                        <ul className="back">
                            <li>{props.options[0]}</li>
                            <li>{props.options[1]}</li>
                            <li>{props.options[2]}</li>
                        </ul>
                    </div>
                )}
        </div>
    </div>
    );
}

export default ContainerCard;