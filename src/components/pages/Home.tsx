import React from 'react';
import { motion } from 'framer-motion';

import {
  introMessages,
  midwayMessages,
  pageTransition,
  pageVariants
} from '../../constants';
import { TPosition } from '../../types';
import { moose, yellowstone } from '../../images';
import MessageWithPicture from '../MessageWithPicture';
import RestaurantGridList from '../RestaurantGridList';
import { TransitCard, WiFiCard } from '../cards';

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
      <RestaurantGridList />
      <MessageWithPicture
        divider={{ position: TPosition.Top, text: 'WP' }}
        messages={midwayMessages}
        picture={yellowstone}
      />
    </motion.div>
  );
}

export default Home;
