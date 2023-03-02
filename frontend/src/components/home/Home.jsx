import React from "react";
import "./home.scss";
import Featured from "../featured/Featured";
import Alerts from "../alerts/Alerts";
import Sort from "../sort/Sort";
import MainSection from "../mainSection/MainSection";

const Home = () => {
  return (
    <>
      <Featured />
      <Alerts />
      <div className="main-section">
        <Sort />
        <MainSection />
      </div>
    </>
  );
};

export default Home;
