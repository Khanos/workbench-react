import React, { useState } from 'react';
import List from './components/List';
import Actions from './components/Actions';
import { dataSet } from '../data';
import './App.css'

const App = () => {
  const [items, setItems] = useState(dataSet);

  const toggleCheck = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        item.check = !item.check;
      }
      return item;
    }));
  }

  const moveToRight = () => {
    setItems(items.map(item => {
      if (item.check) {
        item.check = false;
        item.position = 'right';
      }
      return item;
    }));
  };

  const moveToLeft = () => {
    setItems(items.map(item => {
      if (item.check) {
        item.check = false;
        item.position = 'left';
      }
      return item;
    }));
  };
  return (
    <div className="main-container flex flex-h">
      <List items={items.filter(item => item.position === 'left')} handleCheck={toggleCheck} />
      <Actions handleMoveToRight={moveToRight} handleMoveToLeft={moveToLeft} />
      <List items={items.filter(item => item.position === 'right')} handleCheck={toggleCheck} />
    </div>
  )
  };

  export default App;