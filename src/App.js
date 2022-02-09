import './App.css';
import React from 'react';

function App() {

  class ItemList extends React.Component {
    render() {
      return (
        <div className='ui unstackable items'>
          <Item />
        </div>
      );
    }
  }

  class Item extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='middle aligned content'>
            <div className='description'>
              <a>Sass</a>
              <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
            </div>
          </div>
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
