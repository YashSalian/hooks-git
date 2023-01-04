import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import img1 from './Images/image_1.jpg'
import img2 from './Images/image_2.jpg'
import img3 from './Images/image_3.jpg'
import List from './Components/List'
import Grid from './Components/Grid'

function App() {

  const img=[img1, img2, img3]
  const arr={
    title: [],
    icon: []
  };
  const [toggle, setToggle] = useState(false)
  
  function genArray() {
    for(var i=0; i<100; i++) {
      arr.title.push(Math.floor(Math.random()*10000))
      arr.icon.push(img[(arr.title[i])%3])
    }
  }
  
  function cycle() {
    if(toggle)
      return (arr.title.map((e,i)=><Grid name={arr.title[i]} icon={arr.icon[i]} key={i}/>))
    else
      return (arr.title.map((e,i)=><List name={arr.title[i]} icon={arr.icon[i]} key={i}/>))
  }

  genArray()

  return (
    <div className="App">
    <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
    {cycle()}
    </div>
  );
}

export default App;
