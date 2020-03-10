import React, {useEffect} from 'react'
import { useFrame, useLoader, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import object from '../Models/scene.gltf'
import { Camera } from 'three'

function Model(props) {
  console.log(object)
  const obj = useLoader(GLTFLoader, object)

  return (
      <primitive object = {obj.scene} dispose = {null} />
  )

}

export default Model