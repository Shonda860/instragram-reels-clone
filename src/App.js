import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    //BEM naming convention 
    <div className="app">

      <div className="app__top">
        <img 
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png"
          alt="instagram camera logo"
          />
          <h1>Reels</h1>
      {/* Reels text */}
      </div>


      <div className="app__videos">
      {/* Container of app videos(scrollable)*/}
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      {/*/ <Video> */}
      {/*/ <Video> */}
      {/*/ <Video> */}
      {/*/ <Video> */}
      {/*/ <Video> */}
      {/*/ <Video> */}
      </div>
    </div>
  );
}

export default App;
