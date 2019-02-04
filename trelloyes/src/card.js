import React from 'react';
import List from '/List.js';

function Card (title, content){
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>

    );
}

export default Card;