import React, { useState, useEffect }  from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    //App Comment will run ONCE when it loads
    db.collection('reels').onSnapshot(snapshot =>
    (setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
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
      {reels.map(({channel, avatarSrc, song, url, likes,shares}) => (
        <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
