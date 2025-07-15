// learning recoil
/*
import { useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "./store/atoms/Counter"

function App(){
  return <>
  <div>
    <RecoilRoot>
      <Counter></Counter>
    </RecoilRoot>
    
  </div>
  </>
}


this is the simple application with the help of use state  
function Counter(){
const[ count , setcount]  =useState(0);
function IncreaseCount(){
     setcount(count+1);

}

function DecreaseCount(){
  if(count>0){
    setcount(count-1);
  }
}

  return <div>
    <div>{count}</div>
    <button onClick={IncreaseCount}>Increase</button>
    <button onClick={DecreaseCount}>Decrease</button>
  </div>
}

export default App
*/



// it is row state varibale by passing props
/*
function Counter1(){
  const [count ,setcount] =useState(0);
  return <div>
    {count}
   <IncreaseCount setcount ={setcount}></IncreaseCount>
   <DecreaseCount setcount ={setcount}></DecreaseCount>
  </div>
}

function IncreaseCount({setcount}){
  function Increase(){
    setcount(count=>count+1)
  }
  return <div>
    <button onClick={Increase}>Increase</button>
  </div>
}

function DecreaseCount({setcount}){
  function Decrease(){
    setcount(count=>count-1)
  }
  return <div>
  <button onClick={Decrease}>Decrease</button>
  </div>
}





export default App

*/
// this is how the recoil code is written  
/*
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "./store/atoms/Counter"

function App() {
  return (
    <RecoilRoot>
      <Counter></Counter>
    </RecoilRoot>
  )
}

function Counter() {
  return <div>
    <CountValue></CountValue>
    <IncreaseCount></IncreaseCount>
    <DecreaseCount></DecreaseCount>
  </div>
}

function CountValue() {
  const count = useRecoilValue(counterAtom); //this have the access ot the value

  return <div>
    {count}
  </div>
}


function IncreaseCount() {

  const setcount = useSetRecoilState(counterAtom);// this will update teh state it do not access the state ot value

  function Increase() {
    setcount(count => count + 1)
  }

  return <div>
    <button onClick={Increase}>Increase</button>
  </div>
}


function DecreaseCount() {

  const setcount = useSetRecoilState(counterAtom);

  function Decrease() {
    setcount(count => count - 1)
  }

  return <div>
    <button onClick={Decrease}>Decrease</button>
  </div>
}

export default App

*/

// her we are using consept of memo to remove the problem or re-rendering of children if ther is re-render in the parnet component

// but id you wrap a component inside a memo only if the props/state in the child has changes only then will it re-render
//  memo donot re-render unitl a prop chnegse or state changes

import { useEffect, useState , memo} from "react"


function App() {
  return (
    <Counter></Counter>
  )
}

function Counter() {
  const [count , setcount] = useState(0);

  useEffect(function () {
    setInterval(function () {
      setcount(count => count + 1)
    }, 3000)
  }, [count]);

  return <div>
    <CurrentCount></CurrentCount>
    <IncreaseCount></IncreaseCount>
    <DecreaseCount></DecreaseCount>
  </div>
}



const CurrentCount = memo(function(){
  return <div>
    1
  </div>
})



const IncreaseCount= memo(function() {

  function Increase() {
    
  }

  return <div>
    <button onClick={Increase}>Increase</button>
  </div>
})


const DecreaseCount= memo(function() {

  function Decrease() {
  }

  return <div>
    <button onClick={Decrease}>Decrease</button>
  </div>
})

export default App

