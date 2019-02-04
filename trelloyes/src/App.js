import React  from 'react';
import List from '/List.js';


function App (props){
  const store = props.store;
  const lists = store.lists;
  const allCards = store.allCards;
  // const { lists, allCards } = props.store;
  return (
    <main>
      <h1>Trelloyes!</h1>
      <div className="App-list">
        { lists.map((list) => <List key={list.id} header={list.header} 
        cards={list.cardids.map(id => allCards[id])} />
        )}
      </div>
    </main>
  );
}

export default App;
