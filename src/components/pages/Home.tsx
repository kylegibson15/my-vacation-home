import React from 'react';
import { motion } from 'framer-motion';

import {
  introMessages,
  midwayMessages,
  pageTransition,
  pageVariants
} from '../../constants';
import { TPosition } from '../../types';
import { bear, buffalo, moose, yellowstone } from '../../images';
import MessageWithPicture from '../MessageWithPicture';
import RestaurantGridList from '../RestaurantGridList';
import { TransitCard, TopicCard, WiFiCard } from '../cards';
import DividerWithText from '../DividerWithText';

function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <WiFiCard />
      <MessageWithPicture
        divider={{ position: TPosition.Bottom, text: 'Enjoy!' }}
        messages={introMessages}
        picture={moose}
      />
      <TransitCard />
      <MessageWithPicture
        divider={{ position: TPosition.Top, text: 'Another' }}
        messages={midwayMessages}
        picture={bear}
      />
      <RestaurantGridList />
      <DividerWithText value="Hot Tub" />
      <MessageWithPicture
        divider={{ position: TPosition.Bottom, text: 'Midway' }}
        messages={midwayMessages}
        picture={buffalo}
      />
      <TopicCard border />
      <MessageWithPicture
        divider={{ position: TPosition.Top, text: 'WP' }}
        messages={midwayMessages}
        picture={yellowstone}
      />
    </motion.div>
  );
}

export default Home;
