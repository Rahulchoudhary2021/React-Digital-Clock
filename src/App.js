import React, { useState } from 'react';
import './App.css';
const App=()=>{
  let date=new Date().toLocaleDateString();
  let time=new Date().toLocaleTimeString();
  const [ctime,setCtime]= useState(time);
 const updateTime=()=>{
  time=new Date().toLocaleTimeString();
  setCtime(time);
 };
 setInterval(updateTime,1000);

  
  return(
    <div className="clock">
          <h1 className="date">{date}</h1>
          <p className="tttt">{ctime}</p>
          <h2 class="text">DIGITAL CLOCK with React.js</h2>

  </div>
  );
}
export default App;
