import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react';
import Article from './Components/Article'
import ModelViewer from './Components/ModelViewer'
import Box from './Components/Box'
import ThreeText from './Components/ThreeText'
import Model from './Components/Model'
import { BoxGeometry } from 'three';
import Slot from './Components/Slot';
import ARComponent from './Components/ARComponent';
import SlotPanel from './Components/SlotPanel';
import Graph from './Components/Graph'
import { Dom, Canvas } from 'react-three-fiber'
import Demo from './Components/Demo';
import { Switch, Route, Link } from 'react-router-dom'
import Profile from './Components/Pages/Profile'
import Male from './Components/Male'
import Home from './Components/Pages/Home'
import StatusBar from './Components/Layout/StatusBar'
require('./stylesheets/main.scss')
 
function App() {

  let [topSlot, setTopSlot] = useState("")
  let [bottomSlot, setBottomSlot] = useState("")
  let [leftSlot, setLeftSlot] = useState("")
  let [rightSlot, setRightSlot] = useState("")
  let [focusedTab, setFocusedTab] = useState("Home")

  useEffect(() => {   
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"TOP": topSlot, "BOTTOM": bottomSlot, "LEFT": leftSlot, "RIGHT": rightSlot});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://t-9.tools:5000/slots", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    return () => {
    };
}, [topSlot, bottomSlot, rightSlot, leftSlot])

  return (
    <div className="App">
      

        <Switch>
          <Route exact path="/">
            {/* <Demo /> */}
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/story/:storyID">
            <Demo />
            <SlotPanel clickable={false}/>
          </Route>
        </Switch>
          
          {/* <ModelViewer>
            <Suspense fallback={null}>
              <Model />
            </Suspense> 
          </ModelViewer> */}
          {/* <Header /> */}
          {/* <ModelViewer>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </ModelViewer> */}
    </div>
  );
}

export default App;
