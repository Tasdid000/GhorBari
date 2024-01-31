import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponents from './Components/MainComponents';
import mystore from './redux/store';
import { Provider } from 'react-redux';
import LoadingPage from './loadingpage'; // Import your LoadingPage component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  console.log('App.js:', mystore.getState());

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
