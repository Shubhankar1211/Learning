// here are custom hooks learning

import { useState } from "react"

// this is the simple version of are application
/*
import { useState } from "react"
function App() {
  return (
    <div>
        <Counter></Counter>
    </div>
  )
}

function Counter(){
  const [count , setcount ]= useState(0);

  function increase(){
    setcount(c=>c+1);
  }
  return<div>
     <button onClick={increase}>start {count}</button>
  </div>
}
export default App
*/

// here we are making this with the help of the custom hooks 
function useCounter(){
  const [count , setcount] = useState(0);

  function increase(){
    setcount(count+1);
  }
  return {
     count : count,
     increase: increase
  }
}

function App(){
  const {count , increase} = useCounter(); // this is destructuring the object
  return (<div>
     <button onClick={increase}> Count {count}</button>
  </div>)
}

export default App
