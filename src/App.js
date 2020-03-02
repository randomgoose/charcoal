import * as THREE from 'three'
import React, { Suspense } from 'react';
import Article from './Components/Article'
import ModelViewer from './Components/ModelViewer'
import Box from './Components/Box'
import ThreeText from './Components/ThreeText'
import Model from './Components/Model'
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Article />
      </main>
    </div>
  );
}

export default App;
