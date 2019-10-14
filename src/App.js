import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Timeline } from 'react-twitter-widgets';

function App() {
  return (
    <div className="App">
      <header className="App-Body">
        <div class="Ride-Rules">
          <h2>
            Morris Industries Ghost Capture
          </h2>
          <p>
            Morris Industries Ghost Capture is a slow motion thrill ride that includes lasers, smoke machines and a ride photo being taken and posted to twitter.
          </p>
          <div class="warning-heading">
            WARNING!
          </div>
          <div class="warning-text">
            <p>
              For safety, you should be in good health and free from high blood pressure, heart, back or neck problems, motion sickness or other conditions that could be aggravated by this adventure.
            </p>
            <p>
              Expectant mothers should not ride this ride.
            </p>
            <p>
              Maximum ride weight limit is 250 pounds.
            </p>
            <p>
              Supervise children at all times.
            </p>
          </div>
        </div>
        <div class="Twitter-Embed">
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
              chrome: 'noheader, nofooter, noborders, transparent, noscrollbar',
              tweetLimit: '3',
              height: '600'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
