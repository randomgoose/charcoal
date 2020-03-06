import React, { useRef, useState } from 'react'
import { useFrame, useThree } from 'react-three-fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

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

  gl.setSize(720, 720)
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1, 1, 1] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box