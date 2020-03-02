import React from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import object from '../Models/snow.obj'

function Model(props) {

  const obj = useLoader(OBJLoader, object)

  obj.scale.set(0.2, 0.2, 0.2)
  useFrame(() => (obj.rotation.x = obj.rotation.y += 0.01))

  return (
      <primitive object = {obj} />
  )

}

export default Model