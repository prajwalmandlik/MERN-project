import React from 'react'
import "./home.scss"
import Featured from "../featured/Featured";
import Alerts from '../alerts/Alerts';
import Sort from '../sort/Sort';

const Home = () => {
  return (
    <>
      <Featured />
      <Alerts />
      <Sort />
    </>
  )
}

export default Home
