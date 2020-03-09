import React, {useEffect} from 'react'
import { useFrame, useLoader, useThree } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'
import object from '../Models/snow.obj'
import material from '../Models/snow.mtl'
import { Camera } from 'three'

function Model(props) {

  const obj = useLoader(OBJLoader, object)
  const mat = useLoader(MTLLoader, material)
  

  const {
    gl,                           // WebGL renderer
    scene,                        // Default scene
    camera,                       // Default camera
    size,                         // Bounds of the view (which stretches 100% and auto-adjusts)
    viewport,                     // Bounds of the viewport in 3d units + factor (size/viewport)
    aspect,                       // Aspect ratio (size.width / size.height)
    mouse,                        // Current 2D mouse coordinates
    clock,                        // THREE.Clock (useful for useFrame deltas)
    invalidate,                   // Invalidates a single frame (for <Canvas invalidateFrameloop />)
    intersect,                    // Calls onMouseMove handlers for objects underneath the cursor
    setDefaultCamera,             // Sets the default camera
  } = useThree()

  gl.setSize(600, 400)
  useEffect(() => {
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);
  })
  // camera.lookAt(0, 0, 0)

  obj.scale.set(0.01, 0.01, 0.01)
  obj.position.set(0, 0, 0)
  // useFrame(() => (obj.rotation.x = obj.rotation.y += 0.01))
  console.log(mat)

  return (
      <primitive object = {obj} />
  )

}

export default Model