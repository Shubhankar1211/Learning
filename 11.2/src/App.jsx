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
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}


function IncreaseCount() {

  const setcount = useSetRecoilState(counterAtom);

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


