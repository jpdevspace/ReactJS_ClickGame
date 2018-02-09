import React from 'react';

const Card = props => {
    return (
        <div 
            id={props.id}
            className="card" 
            style={{ backgroundImage: `url("${props.image}")` }}
            onClick={() => props.addCompare(props.id)}
        >
        </div>  
    );
}
export default Card;