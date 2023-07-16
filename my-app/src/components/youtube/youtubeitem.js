import React from 'react';

const youtubeitem = (props) => {
    return (
        <div className={`youtube-item ${props.className}`}>
        <img className="youtube-image" src={props.image} alt="youtube" />
        <div className="youtube-infor">
          <img className="youtube-avatar" src={props.avatar} alt="" />
          <h3 className="youtube-title">{props.title || "This is example title"}</h3>
        </div>
        <p className="youtube-channel">{props.channel}</p>
      </div>
    );
};

export default youtubeitem;