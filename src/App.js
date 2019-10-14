import React from 'react';
import './App.css';
import { Timeline } from 'react-twitter-widgets';

function App() {
  return (
    <div className="App">
      <header className="App-Body">
        <div class="Ride-Rules">
          <h2>
            Morris Industries<br></br>Ghost Capture
          </h2>
          <p>
            Morris Industries Ghost Capture is a slow motion thrill ride that includes lasers, smoke machines and a ride photo being taken and posted to twitter.
          </p>
          <div class="Warning-Heading">
            WARNING!
          </div>
          <div class="Warning-Text">
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
              width: '1000',
              theme: 'dark',
              conversation: 'none',
              chrome: 'noheader, nofooter, noborders, transparent, noscrollbar',
              height: '700'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </div>
      </header>
      <footer>
        <h3>Find your ride photo online at twitter.com/MorrisHalloween</h3>
      </footer>
    </div>
  );
}

export default App;
