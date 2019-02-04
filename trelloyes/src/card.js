import React from 'react';
import List from '/List.js';

function Card (props){
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>

    );
}

export default Card;