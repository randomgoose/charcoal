import React, {useEffect, useMemo, useRef} from 'react'
import { useFrame, useLoader, useThree } from 'react-three-fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'
import object from '../Models/male.fbx'
import * as THREE from 'three'

function Model(props) {
  const model = useRef(null)

  const obj = useLoader(FBXLoader, object)
  const mixer = useMemo(() => new THREE.AnimationMixer(), [])
  
  useFrame((state, delta) => {
      mixer.update(delta)
    })
  
  // console.log(obj.animations)

  useEffect(() =>{
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);
    mixer.clipAction(obj.animations[0], model.current).play()

    return () => {
      obj.animations.forEach(clip => {
        mixer.uncacheClip(clip)
        console.log(clip)
      })
    }
  }, [])

  const {
    gl,                       
    camera
  } = useThree()

  gl.setSize(600, 400)

  obj.scale.set(0.01/10, 0.01/10, 0.01/10)
  obj.position.set(0, 0, 0)
  // useFrame(() => (obj.rotation.x = obj.rotation.y += 0.01))

  return (
    <group ref={model}>
      <primitive object={obj} />
    </group>
  )

}

export default Model