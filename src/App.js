import React, { Component } from "react";
//import logo from './logo.svg';
import Navbar from "./components/navigation";
import Items from "./components/items";

import "./App.css";

class App extends Component {
  state = {
    itemList: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
      { id: 7, value: 0 },
      { id: 8, value: 0 }
    ],
    total: 0
  };

  handleIncriment = item => {
    const newItemList = [...this.state.itemList];
    const index = newItemList.indexOf(item);
    newItemList[index] = { ...item };
    newItemList[index].value++;
    const newObj = {
      itemList: newItemList,
      total: newItemList.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.value;
      }, 0)
    };
    this.setState(newObj);
    //this.setState({ itemList: newItemList });
  };
  handleDelete = deletedId => {
    const deletedItem = this.state.itemList.filter(c => c.id !== deletedId);
    this.setState({ itemList: deletedItem });
  };

  handleReset = () => {
    const resetCont = this.state.itemList.map(c => {
      c.value = 0;
      return c;
    });
    const resetValue = {
      itemList: resetCont,
      total: 0
    };
    this.setState(resetValue);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalCount={this.state.total} />
        <Items
          itemList={this.state.itemList}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncriment={this.handleIncriment}
        />
      </React.Fragment>
    );
  }
}

export default App;
