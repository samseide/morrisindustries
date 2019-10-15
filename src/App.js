import React from 'react';
import './App.css';
import RideRules from './RideRules';
import TwitterFeed from './TwitterFeed';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-Body">
        <RideRules />
        <TwitterFeed />
      </header>
      <Footer />
    </div>
  );
}

export default App;
