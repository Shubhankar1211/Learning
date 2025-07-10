// this is the consept of rooling ->: if a child want to access the state property of its sibling it cant access it to acces it we use the  concept of rolliong the state
// in rolling the state we then pass the component to the least common ansestar so that its child can access the state 



/*
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
  */





// this is how we deal with the prop drilling problem by using context api

import { createContext, useContext, useState } from "react"
const BulbContext = createContext(); // this is how we declare the context api 

// this is how we use context api by wrapping inside them
// this is our custom bulb provider 
function BulbProvider({ children }) {
  const [bulbon, setbulbon] = useState(true);
    return < BulbContext.Provider value = {{
      bulbon: bulbon,
      setbulbon: setbulbon
    }}>
  { children }
      </BulbContext.Provider >
}


function App() {

  return (
    <div>
      <BulbProvider>
        <Light></Light>
      </BulbProvider>
    </div>
  )
}


function Light() {
  return <div>
    <LightBulb></LightBulb>
    <LightSwitch></LightSwitch>
  </div>
}


function LightBulb() {
  const { bulbon } = useContext(BulbContext);
  return <div>
    {bulbon ? "Bulb On" : "Bulb Off"}
  </div>
}


function LightSwitch() {
  const { bulbon, setbulbon } = useContext(BulbContext);
  function ToggleButton() {
    setbulbon(!bulbon)
  }
  return <div>
    <button onClick={ToggleButton}>Toggle the bulb</button>
  </div>
}


export default App
