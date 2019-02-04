import React from 'react';
import Card from './Card'
import App from './App.js';
import STORE from './Store.js';
import './List.css';


function List (props){
    
    return (
        <section className="List">
          <header>
            <h2>{props.header}</h2>
          </header>
          <div className="List-cards">
          </div>
        </section>
    )
}

export default List;