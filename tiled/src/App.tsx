import React, {useState, useEffect} from 'react';
import {genRandomListOfNumbers} from './utils/genRandomListOfNumbers'
import {Dashboard} from './components/Dashboard'

import './assets/css/App.css';


function App() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState(genRandomListOfNumbers(0))

  useEffect(() => {
      let timer = setTimeout(() => setLoading(false),5000);

      // This will clear timeout
      return () => {
          clearTimeout(timer);
      };
  },[])

  function refreshListing(seed: number){
      setList(genRandomListOfNumbers(seed))
  }

  return (
    <div className="App">
      <header className="App-header">
       <Dashboard loading={loading} listing={list} refreshListing={refreshListing} />
      </header>
    </div>
  );
}

export default App;
