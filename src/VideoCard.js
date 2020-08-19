import React, { useState,useRef } from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css';

function VideoCard({url,likes, shares, channel, avatarSrc,song}){ 
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  //useRef
    const onVideoPress = () => {
      if (isVideoPlaying) {
        //stop
        videoRef.current.pause();
        setIsVideoPlaying(false)
      } else {
        //play
        videoRef.current.play();
        setIsVideoPlaying(true)
      }
    };
  return(
    <div className='videoCard'>
    <VideoHeader/>
      <video 
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt='IG reel video'
        loop/> 
  
    <VideoFooter
      channel={channel}
      avatarSrc={avatarSrc}
      song={song}
      likes={likes}
      shares={shares} 
      /> 
    </div>

  )
  
}
export default VideoCard; 