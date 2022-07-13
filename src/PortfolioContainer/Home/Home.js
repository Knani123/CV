import React, { useRef } from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

import "./Home.css";
const Home = () => {
  const Home = useRef(null);
  return (
    <div className="home-container" ref={Home}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
