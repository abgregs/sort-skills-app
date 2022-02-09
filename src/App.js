import './App.css';
import React from 'react';

function App() {

  class ItemList extends React.Component {
    render() {
      return (
        <div className='ui unstackable items'>
          Hello, friend! I am a basic React component.
        </div>
      );
    }
  }

  return (
    <div className="App">
      <div className="main ui text container">
        <header>
          <h1 className="ui dividing centered header">Technologies I Use</h1>
        </header>
        <div id="content">
          <ItemList />
        </div>
      </div>
    </div>
  );
}

export default App;
