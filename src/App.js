import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Timeline } from 'react-twitter-widgets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MorrisHalloween'
          }}
          options={{
            username: 'MorrisHalloween',
            width: '600',
            theme: 'dark',
            conversation: 'none',
            height: '600'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </header>
    </div>
  );
}

export default App;
