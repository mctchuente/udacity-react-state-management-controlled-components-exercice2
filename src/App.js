import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewItem from './AddNewItem';
import ShoppingList from './ShoppingList';
import RemoveLastItem from './RemoveLastItem';

class App extends React.Component {
  state = {
    items: [],
  };

  actionAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  actionRemoveLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddNewItem onAddItem={this.actionAddItem} />
        <RemoveLastItem
          onRemoveLastItem={this.actionRemoveLastItem}
          buttonDisabled={this.noItemsFound()}
        />
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}

export default App;
