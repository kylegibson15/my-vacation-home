import React, { FC } from 'react'
import Counter from '../components/counter/Counter'

export const Home: FC = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Hello and welcome! :) This app was generated by the Create React App
        template and bootstrapped with Redux, React Router, TypeScript, ESlint,
        Prettier for you. Take a look around ;)
      </p>
      <Counter />
    </>
  )
}
