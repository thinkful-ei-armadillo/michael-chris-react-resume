import React from 'react';
import App from './App.js';
import STORE from './Store.js';


function List (header, cards){
    const cardList = STORE.lists.map(cards => 
        <Card key={cards.id}  header={cards.header} cardId={cards.cardIds} />
        );
    return (
        <React.Fragment>
          <section className="List">
             <header className="List-header">
                <h2>{header}</h2>
             </header>
             <div class="List-cards">
                {cardList}
             </div>
          </section>  
            
            
        </React.Fragment>
    )
}

export default List;