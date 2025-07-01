// this is the consept of rooling ->: if a child want to access the state property of its sibling it cant access it to acces it we use the  concept of rolliong the state
// in rolling the state we then pass the component to the least common ansestar so that its child can access the state 

import { useState } from "react"


function App() {
  return (
    <>
      <LightBulb></LightBulb>
    </>
  )
}


function LightBulb() {
  const [bulbon, setbulbon] = useState(true)
  return <div>
    <BulbState bulbon={bulbon}></BulbState>
    <ToggleBulbState bulbon={bulbon} setbulbon={setbulbon}></ToggleBulbState>
  </div>
}


function BulbState({bulbon}) {


  return <div>
    {bulbon ? "Bulb On" : "Bulb Off"}
  </div>
}



function ToggleBulbState({bulbon,setbulbon}) {
  function ToggleButton() {
    setbulbon(!bulbon)
  }
  return <div>
    <button onClick={ToggleButton}>Toggle the bulb</button>
  </div>
}


export default App
