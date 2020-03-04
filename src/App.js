import * as THREE from 'three'
import React, { Suspense } from 'react';
import Article from './Components/Article'
import ModelViewer from './Components/ModelViewer'
import Box from './Components/Box'
import ThreeText from './Components/ThreeText'
import Model from './Components/Model'
import './App.css';
import { BoxGeometry } from 'three';

function App() {
  return (
    <div className="App">
      <main>
        <Article />
        {/* <Sample /> */}
      </main>
    </div>
  );
}

export default App;
