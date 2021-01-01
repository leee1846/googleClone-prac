import React from "react";
import "./Home.css";
import MicIcon from "@material-ui/icons/Mic";

function Home() {
  return (
    <div className='home'>
      <div className='home'>SS</div>

      <header className='home__header'>
        <div className='home__headerLeft'>
          <MicIcon />
        </div>
        <div className='home__headerRight'></div>
      </header>

      <div className='home__body'></div>
    </div>
  );
}

export default Home;
