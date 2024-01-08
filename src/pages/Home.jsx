import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import {Island} from '../models/Island'
// import Sky from '../models/Sky'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  // Call the function to get the values
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
// 48.22
  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={1}/>
          <pointLight />
          <spotLight />
          <hemisphereLight skycolor="#b1e1ff" groundColor="#000000"
          intensity={0.0}/>

          <Bird/>
          <Sky/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />

        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;