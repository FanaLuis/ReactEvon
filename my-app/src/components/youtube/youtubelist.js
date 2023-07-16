import React from 'react';
import { youtubedata } from '../../Data';
import YoutubeItem from './youtubeitem';


const Youtubelist = (props) => {
    return (
        <div className="youtube-list">
        {props.children}
    {youtubedata.map((item, index) => {
      let newClassName = "";
      if(index === 1 ) newClassName = "abc";
      return(
      <YoutubeItem
      key= {item.id} image = {item.image} avatar= {item.avatar || item.image} 
      title= {item.title} channel= {item.channel} className = {newClassName}
       ></YoutubeItem>
    )})}
      
    </div>
    );
};

export default Youtubelist;