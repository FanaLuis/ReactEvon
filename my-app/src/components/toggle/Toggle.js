import React, { useState } from "react";
import "./ToggleStyle.css";
// stateless funtion component : component nhuwngx ko co state
// function Toggle(){
//     return <div className='toggle'></div>

// }
// // stateful class component : component co su dung state

// function Toggle2 (){
// const [count, setCount] = useState(0);
//     return <div className='toggle'></div>
// }
function Toggle() {
  // enabling state: useState(initialize value)
  // initial state : useState(false)
  // reading state
  // updating state
  const [on, setOn] = useState(false);
  // console.log(on, setOn);
  console.log(on);
  const handleToggle = () => {
    setOn((on) => !on);
  }
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}></div>
        <div className="toggle-off" onClick={() => setOn(false)}></div>
      </div>
    </div>
  );
}
export default Toggle;
