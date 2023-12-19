import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponents from './Components/MainComponents';
import mystore from './redux/store';
import { Provider } from 'react-redux'

function App() {
  console.log( 'App.js : ',  mystore.getState
  ()
 
  );
  return (
    <div className="App">
      <Provider store={mystore}>
        <BrowserRouter>
          <MainComponents />
        </BrowserRouter>
      </Provider>



    </div>
  );
}

export default App;
