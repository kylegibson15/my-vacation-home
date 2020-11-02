import React, { FC } from 'react'
import { motion } from 'framer-motion'

import CheckOutButton from '../components/CheckOutButton'
import IntroMessage from '../components/IntroMessage'
import {
  RestaurantsCard,
  TheLiftWinterParkCard,
  TopicCard,
  WiFiCard,
} from '../components/cards'

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
}

export const Home: FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <CheckOutButton />
      <WiFiCard />
      <IntroMessage />
      <TheLiftWinterParkCard />
      <RestaurantsCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </motion.div>
  )
}
