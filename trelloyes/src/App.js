import React  from 'react';
import List from './List.js';
import './App.css';


function App (props){
  const store = props.store;
  const lists = store.lists;
  const allCards = store.allCards;
  // const { lists, allCards } = props.store;
  return (
    <main className="App">
      <header className="App-header"><h1>Trelloyes!</h1></header>
      <div className="App-list">
        { lists.map((list) => <List key={list.id} header={list.header} 
        cards={list.cardIds.map(id => allCards[id])} />
        )}
      </div>
    </main>
  );
}

export default App;
