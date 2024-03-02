import React from "react";
import { useState } from 'react';
import "./Dictionary.css";


function LikeButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
    <div className="likebutton">
      <button className="pushable" onClick={handleClick}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">Liked {count} times</span>
      </button>
    </div>
    </>
    
  );
}

function Dictionary(props) {
  
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={props.name}>
            {props.emoji}
          </span>
        </dt>
        <dt>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
        <LikeButton />
      </div>
    </>
  );
}

export default Dictionary;
