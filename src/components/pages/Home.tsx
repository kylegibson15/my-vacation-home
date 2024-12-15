import React from 'react';

import { introMessages } from '../../constants';
import { moose } from '../../images';
import MessageWithPicture from '../MessageWithPicture';
import QuickReference from '../QuickReference';
import { TransitCard } from '../cards';

function Home() {
  return (
    <div style={{ maxWidth: '500px' }}>
      <MessageWithPicture
        divider={{
          position: 'Bottom',
          text: 'Enjoy!'
        }}
        messages={introMessages}
        picture={moose}
      />
      <TransitCard />
      <QuickReference />
    </div>
  );
}

export default Home;
