import React from 'react';
import './App.css';
import data from './data.js'

import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import { BiDownvote, BiUpvote } from 'react-icons/bi';

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

    state = {
      items: [],
    };
  
    componentDidMount() {
      this.setState({ items: data.items });
    }

    handleRandomizeVotes = () => {
      const nextItems = this.state.items.map((item) => {
        const newCount = Math.floor((Math.random() * 50) + 15);
          return Object.assign({}, item, {
            votes: newCount,
          })
      });
      this.setState({
        items: nextItems,
      });
    }

    handleResetOrder = () => {
      this.setState({
        items: data.items,
      });
    }

    handleItemUpvote = (itemId) => {
      const nextItems = this.state.items.map((item) => {
        if (item.id === itemId) {
          return Object.assign({}, item, {
            votes: item.votes + 1,
          });
        } else {
          return item;
        }
      });
      this.setState({
        items: nextItems,
      });
    }

    handleItemDownvote = (itemId) => {
      const nextItems = this.state.items.map((item) => {
        if (item.id === itemId) {
          return Object.assign({}, item, {
            votes: item.votes - 1,
          });
        } else {
          return item;
        }
      });
      this.setState({
        items: nextItems,
      });
    }

    render() {
      const items = this.state.items.sort((a, b) => (
        b.votes - a.votes
      ));
      const itemComponents = items.map((item) => (
        <Item 
          id={item.id}
          key={'item'+item.id}
          title={item.title}
          description={item.description}
          url={item.url}
          votes={item.votes}
          icon={item.icon}
          iconLibrary = {item.iconLibrary}
          onUpvote = {this.handleItemUpvote}
          onDownvote = {this.handleItemDownvote}
        />
      ));
      return (
        <div>
          <p className="intro">
            This is an app that lists different technologies and gives users the ability to sort them by voting. It's a quick learning project built with React. Try it out by voting to change the order of the items in the list.
          </p>
          <p className="intro">
          The default sort order is based on my level of experience using each technology (the higher up in the order the more experience I have). Use the <em>Randomize Votes</em> button to mix up the votes or the <em>Reset Order</em> button to return to the default order.
          </p>
          <div className="buttons-container">
            <a href="#" onClick={this.handleRandomizeVotes}>Randomize Votes</a>
          </div>
          <div className="buttons-container">
            <a href="#" onClick={this.handleResetOrder}>Reset Order</a>
          </div>
          
          <div className='ui unstackable items'>
            {itemComponents}
          </div>
        </div>
      );
    }
  }

  class Item extends React.Component {

    handleUpvote = () => {
      this.props.onUpvote(this.props.id);
    }

    handleDownvote = () => {
      this.props.onDownvote(this.props.id);
    }

    render() {
      return (
        <div className='item'>
          <div className='middle aligned content'>
            <div className='vote-container'>
              <div className='extra'>
                <a className="brand-icon" href={this.props.url} target="_blank" rel="noreferrer">
                  {this.props.iconLibrary === 'di' && <DynamicDiIcon icon={this.props.icon} title={this.props.title}></DynamicDiIcon>}
                  {this.props.iconLibrary === 'si' && <DynamicSiIcon icon={this.props.icon} title={this.props.title}></DynamicSiIcon>}
                </a>
              </div>
              <div className="vote" href="#" onClick={this.handleUpvote}>
                <BiUpvote />
              </div>
              <div className="vote" href="#" onClick={this.handleDownvote}>
                <BiDownvote />
              </div>
              <div className="vote-count">
                {this.props.votes}
              </div>
            </div>
            <div className='description'>
              <a href={this.props.url} target="_blank" rel="noreferrer">
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
