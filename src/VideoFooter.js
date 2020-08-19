import React from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Ticker from "react-ticker";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
        <div className="videoFooter__actions">
        <div className="videoFooter_actionsLeft">
          <FavoriteIcon fontSize="large" />
          <ModeCommentIcon fontSize="large" />
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon />
            {likes}
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon />
            {shares}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default VideoFooter;
