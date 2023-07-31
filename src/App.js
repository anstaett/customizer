import './index.css';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import logo from './sdlogo.png'  // adjust the path to your image file




function Model(props) {
  const { nodes, materials } = useGLTF('/shoe.gltf')

  
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.laces}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={"lightgrey"}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={"lightgrey"}/>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.sole}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={"lightgrey"}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={"lightgrey"}/>
    </group>
  )
}

function App() {

  const [mesh, setMesh] = useState("#ffffff")
  const [stripes,setStripes] = useState("#ffffff")
  const [sole, setSole] = useState("#ffffff")
  const [laces, setLaces] = useState("#ffffff")


  return (
    <div className="App">
      <div className="wrapper">
      <img src={logo} alt="logo" className='logo'/>
        <div className="card">
            <div className="product-canvas">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ height: '100%', width: '100%' }}>
              <Suspense fallback={null}>
                <ambientLight intensity={3} />
                <Model customColors={{ mesh: mesh, stripes: stripes, sole: sole, laces: laces }} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              </Suspense>
            </Canvas>

            </div>
            <h2>Color chooser</h2>
            <div className='colors'>
                 <div>
                    <input type="color" id="mesh" name="mesh"
                           value={mesh} 
                           onChange={(e) => setMesh(e.target.value)}/>
                    <label for="mesh">Main</label>
                  </div>

                <div>
                    <input type="color" id="stripes" name="stripes"
                            value={stripes} 
                            onChange={(e) => setStripes(e.target.value)} />
                    <label for="stripes">Stripes</label>
                </div>
                 <div>
                    <input type="color" id="sole" name="sole"
                            value={sole} 
                            onChange={(e) => setSole(e.target.value)} />
                    <label for="sole">Sole</label>
                </div>
                <div>
                    <input type="color" id="laces" name="laces"
                            value={laces} 
                            onChange={(e) => setLaces(e.target.value)} />
                    <label for="laces">laces</label>
                </div>
            </div>
        </div>
    </div>
     

    </div>
  );
}

export default App;
