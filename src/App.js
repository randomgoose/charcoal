import * as THREE from 'three'
import React, { Suspense } from 'react';
import Article from './Components/Article'
import ModelViewer from './Components/ModelViewer'
import Box from './Components/Box'
import Model from './Components/Model'
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Article />
        <ModelViewer>
          <Suspense fallback={<Box position={[1, 1, 1]} />}>
            <Model url={'../Models/Books_01.gltf'} />
          </Suspense>
        </ModelViewer>
      </main>
    </div>
  );
}

export default App;
