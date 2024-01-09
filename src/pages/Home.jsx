// import React, {useState, Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import Loader from '../components/Loader'
// import {Island} from '../models/Island'

// import Sky from '../models/Sky'
// import Bird from '../models/Bird'
// import Plane  from '../models/Plane'
// const Home = () => {
//   const[isRotating,setIsRotating]=useState(false)
//   const [currentStage,setCurrentStage]=useState(1)
//   const adjustIslandForScreenSize = () => {
//     let screenScale = null;
//     let screenPosition = [0, -6.5, -43];
//     let rotation = [0.1, 4.7, 0];
    
//     if (window.innerWidth < 768) {
//       screenScale = [0.9, 0.9, 0.9];
//     } else {
//       screenScale = [1, 1, 1];
//     }

//     return [screenScale, screenPosition, rotation];
//   };

//   //adjust something for screen rotation
//   const adjustPlaneForScreenSize = () => {
//     let screenScale,screenPosition;
    
    
//     if (window.innerWidth < 768) {
//       screenScale = [1.5, 1.5, 1.5];
//       screenPosition=[0,-1.5,0]
//     } else {
//       screenScale = [3, 3, 3];
//       screenPosition=[0,-4,-4]
//     }

//     return [screenScale, screenPosition];
//   };
// //something
//   // Call the function to get the values
//   const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
//   const [planeScale,planePosition]=adjustPlaneForScreenSize()
// // 48.22
//   return (
//     <section className='w-full h-screen relative'>
//           <div className='absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center'>
//       POPUP
//     </div>
//       <Canvas 
//       className={
//         `w-full h-screen bg-transparent ${isRotating ? 
//         'cursor-grabbing':'cursor-grab'}
//         camera={{near:0.1,far:1000}}`
//       }
      
//       >
//         <Suspense fallback={<Loader />}>
          
//           <directionalLight position={[1,1,1]} intensity={2}/>
//           <ambientLight intensity={1}/>
//           <pointLight />
//           <spotLight />
//           <hemisphereLight skycolor="#b1e1ff" groundColor="#000000"
//           intensity={0.0}/>

//           <Bird/>
//           <Sky
//           isRotating={isRotating}
//           />
//           <Island
//             position={islandPosition}
//             scale={islandScale}
//             rotation={islandRotation}
//             isRotating={isRotating}
//             setIsRotating={setIsRotating}
//             setCurrentStage={setCurrentStage}
//           />
//           <Plane
//           isRotating={isRotating}
//           planeScale={planeScale}
//           planePosition={planePosition}
//           rotation={[0,20,0]}
//           />

//         </Suspense>
//       </Canvas>
//     </section>
//   );
// }

// export default Home;
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Island } from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

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

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const popupStyle = {
    top: '110px',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    zIndex: 10,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  };

  // Add media query for smaller screens
  if (window.innerWidth < 768) {
    popupStyle.flexDirection = 'column';
    popupStyle.alignItems = 'center';
  }

  return (
    <section className='w-full h-screen relative'>
      <div style={popupStyle}>
        POPUP
      </div>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <pointLight />
          <spotLight />
          <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" intensity={0.0} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
