import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/connect.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to Connectify </h1>
        <p> Music taste can say a lot about someone. Find out who you connect with. </p>
        <Link to="/connect">
          <button> CONNECT </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
