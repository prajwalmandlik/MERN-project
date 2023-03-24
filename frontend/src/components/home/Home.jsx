import React from "react";
import "./home.scss";
import Featured from "../featured/Featured";
import Alerts from "../alerts/Alerts";
import Sort from "../sort/Sort";
import MainSection from "../mainSection/MainSection";

const Home = () => {
  return (
    <div className="main">
      <Featured />
      <Alerts />
      <div className="main-section">
        <Sort />
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
