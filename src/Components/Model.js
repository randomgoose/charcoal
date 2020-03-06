import React, {useEffect} from 'react'
import { useFrame, useLoader, useThree } from 'react-three-fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import object from './words.fbx'

function Model(props) {

  const obj = useLoader(FBXLoader, object)

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



  gl.setSize(480, 480)

  obj.scale.set(0.2, 0.2, 0.2)
  obj.position.set(0, 0, 0)
  // useFrame(() => (obj.rotation.x = obj.rotation.y += 0.01))

  return (
      <primitive object = {obj} />
  )

}

export default Model