import * as THREE from 'three'
import React, { forwardRef, useMemo, useRef, useEffect } from 'react'
import { useLoader, useUpdate, useFrame, useThree} from 'react-three-fiber'



const ThreeText = forwardRef(({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }, ref) => {
  const font = useLoader(THREE.FontLoader, '/bold.json')
  const config = useMemo(() => ({ font, size: 1, height: .01 }), [font])
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )

  const {
    camera
} = useThree()

useEffect(() => {
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0.5);
    // camera.rotation.order = 'YXZ';
    // camera.rotation.y = - Math.PI / 4;
    // camera.rotation.x = Math.atan(- 1 / Math.sqrt(2));
}, [])

  return (
    <group ref={ref} {...props} scale={[0.05 * size, 0.05 * size, 0.05]}>
      <mesh ref={mesh} position={props.position} rotation={props.rotation}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshStandardMaterial attach="material" />
      </mesh>
    </group>
  )
})

export default ThreeText
