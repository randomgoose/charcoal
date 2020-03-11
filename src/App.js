import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react';
import Article from './Components/Article'
import ModelViewer from './Components/ModelViewer'
import Box from './Components/Box'
import ThreeText from './Components/ThreeText'
import Model from './Components/Model'
import './App.scss';
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
 
function App() {

  let [topSlot, setTopSlot] = useState("")
  let [bottomSlot, setBottomSlot] = useState("")
  let [leftSlot, setLeftSlot] = useState("")
  let [rightSlot, setRightSlot] = useState("")

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
      <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      <main>
        
        {/* <Article /> */} 
        {/* <Sample /> */}
        {/* <div id="home" style={{width: "300px", height: "300px", backgroundColor: "purple", position: "absolute", left: "600px", zIndex: "-999"}}></div> */}
        {/* <SlotPanel /> */}
        {/* <Article /> */}
        {/* {/* <ARComponent content="iceberg" setBottomSlot={setBottomSlot} setLeftSlot={setLeftSlot} setRightSlot={setRightSlot} setTopSlot={setTopSlot}/> */}
        {/* <ARComponent content="pride" setBottomSlot={setBottomSlot} setLeftSlot={setLeftSlot} setRightSlot={setRightSlot} setTopSlot={setTopSlot}/>
        <ARComponent content="tree" setBottomSlot={setBottomSlot} setLeftSlot={setLeftSlot} setRightSlot={setRightSlot} setTopSlot={setTopSlot}/>
        <ARComponent content="mountain" setBottomSlot={setBottomSlot} setLeftSlot={setLeftSlot} setRightSlot={setRightSlot} setTopSlot={setTopSlot}/>
        <ARComponent content="python" setBottomSlot={setBottomSlot} setLeftSlot={setLeftSlot} setRightSlot={setRightSlot} setTopSlot={setTopSlot}/> */}
        {/* <ModelViewer> */}
          {/* <Article />
          <SlotPanel /> */}
          {/* <Suspense fallback={null}>
          <Graph id={0} />
          </Suspense> */}
        {/* </ModelViewer> */}
        <Switch>
          <Route exact path="/">
            <Demo />
            <SlotPanel clickable={false}/>
          </Route>
          <Route path="/profile">
            <Profile />
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
      </main>
    </div>
  );
}

export default App;
