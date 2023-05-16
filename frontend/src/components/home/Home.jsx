import React from "react";
import "./home.scss";
import Featured from "../featured/Featured";
import Sort from "../sort/Sort";
import MainSection from "../mainSection/MainSection";

const Home = () => {
  return (
    <div className="main">
      <Featured />
      <div className="main-section">
        <Sort />
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
