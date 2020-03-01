import React, { useRef, useMemo, Suspense, useState } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import Box from './Box'
import { Group, FontLoader } from 'three'
import object from '../Models/snow.obj'
import mtlFile from '../Models/snow.mtl'
import bebas from './bebas.json'
import * as THREE from 'three'

function Model(props) {
  // This reference will give us direct access to the mesh
  // let url = "cube.obj"

  // Set up state for the hovered and active state
  const obj = useLoader(OBJLoader, object)
  let font = useLoader(FontLoader, bebas)

  console.dir(font)

 let fontGeometry = new THREE.TextGeometry( 'Hello three.js!', {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5
    } )

  obj.scale.set(0.2, 0.2, 0.2)
  useFrame(() => (obj.rotation.x = obj.rotation.y += 0.01))


  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    // <Group>
      // <primitive object={obj} dispose={null}/>
      <mesh>
        <textGeometry attach="fontGeometry"></textGeometry>
      </mesh>
    // </Group>
  )

}

export default Model