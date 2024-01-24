import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskReducer from './redux/reducer';
import Main from './Main';
import './App.css';

const rootReducer = combineReducers({ 
  taskReducer,
});

const store = configureStore({ reducer: rootReducer });

export default function App() {
  return (
    <Provider store={ store }>
      <Main />
    </Provider>
  );
};