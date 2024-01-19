import React, { useState } from 'react';
import List from './components/List';
import Actions from './components/Actions';
import { data } from './Data';
import { findInterception, findDivergency } from './Utils';
import './App.css'

const App = () => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const toggleCheck = (item) => {
    const index = checkedList.indexOf(item);
    const newCheckedList = [...checkedList];
    if ( index !== -1) { 
      newCheckedList.splice(index, 1);
    } else {
      newCheckedList.push(item);
    }
    setCheckedList([...newCheckedList]);
  }

  const itemsToMoveRight = findInterception(leftItems, checkedList);
  const itemsToMoveLeft = findInterception(rightItems, checkedList);

  const moveToRight = () => {
    setRightItems(rightItems.concat(itemsToMoveRight));
    setLeftItems(findDivergency(leftItems, checkedList));
    setCheckedList(findDivergency(checkedList, itemsToMoveRight));
  };

  const moveToLeft = () => {
    setLeftItems(leftItems.concat(itemsToMoveLeft));
    setRightItems(findDivergency(rightItems, checkedList));
    setCheckedList(findDivergency(checkedList, itemsToMoveLeft));
  };
  return (
    <div className="main-container flex flex-h">
      <List items={leftItems} handleCheck={toggleCheck} />
      <Actions handleMoveToRight={moveToRight} handleMoveToLeft={moveToLeft} />
      <List items={rightItems} handleCheck={toggleCheck} />
    </div>
  )
  };

  export default App;