import React, { FC } from 'react'

import { TheLiftWinterParkCard, TopicCard, WiFiCard } from '../components/cards'

export const Home: FC = () => {
  return (
    <>
      <WiFiCard />
      <TheLiftWinterParkCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </>
  )
}
