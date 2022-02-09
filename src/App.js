import React from 'react';
import './App.css';
import data from './data.js'

function App() {

  class ItemList extends React.Component {
    render() {
      const itemComponents = data.items.map((item) => (
        <Item 
          key={'item-'+item.id}
          title={item.title}
          description={item.description}
          url={item.url}
          votes={item.votes}
        />
      ));
      return (
        <div className='ui unstackable items'>
          {itemComponents}
        </div>
      );
    }
  }

  class Item extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='middle aligned content'>
            <div className='header'>
              <a>
                Vote {/* TODO: Vote button will go here */}
              </a>
              {this.props.votes}
            </div>
            <div className='description'>
              <a href={this.props.url}>
                {this.props.title}
                </a>
              <p>{this.props.description}</p>
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
