import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Testing Redux</h1>
      </div>
    </Provider>

  );
}

export default App;
