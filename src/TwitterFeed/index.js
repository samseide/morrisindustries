import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TwitterFeed = () => {
  return (
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
  )
}

export default TwitterFeed;