import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies)  // store is created
  console.log("store",store);
  // console.log('before state',store.getState());

  // store.dispatch({    // use to add action to the reducers
  //   type: "ADD_MOVIES",
  //   movies: [{name: "superman"},{name:"spiderman"},{name:"batman"}]
  // });

  // console.log("after state",store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
