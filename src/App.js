import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import data from './data.js'

import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';

function App() {

  const IconMissing = (props) => {
    return (
      <div className="icon-missing">{props.title}</div>
    )
  }

  const DynamicDiIcon = (props) => {
    const IconComponent = DiIcons[props.icon];

    if (!IconComponent) { // Return a default one
      return <IconMissing title={props.title}/>;
    }

    return <IconComponent title={props.title}/>;
  };

  const DynamicSiIcon = (props) => {
    const IconComponent = SiIcons[props.icon];

    if (!IconComponent) { // Return a default one
      return <IconMissing title={props.title}/>;
    }

    return <IconComponent />;
  };

  class ItemList extends React.Component {
    render() {
      const itemComponents = data.items.map((item) => (
        <Item 
          key={'item-'+item.id}
          title={item.title}
          description={item.description}
          url={item.url}
          votes={item.votes}
          icon={item.icon}
          iconLibrary = {item.iconLibrary}
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
              <div className='extra'>
                <a href={this.props.url} target="_blank">
                  {this.props.iconLibrary === 'di' && <DynamicDiIcon icon={this.props.icon} title={this.props.title}></DynamicDiIcon>}
                  {this.props.iconLibrary === 'si' && <DynamicSiIcon icon={this.props.icon} title={this.props.title}></DynamicSiIcon>}
                </a>
              </div>
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
