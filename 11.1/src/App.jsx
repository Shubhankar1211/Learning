// here are custom hooks learning

import {  useEffect,  useState } from "react";



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
/*
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
*/


// this is how we fetch data form the backend with the help of fetch 
/*
function App(){

  const[post , setpost] = useState();

  async function getPosts(){
    const response =  await fetch("");
    const json =  await response.json();
    setpost(json);
  }

  useEffect(function(){
    getPosts();
  },[])

  return <div>
      <div>{post.title}</div>
  </div>
}

export default App
*/

//this is hpw we create the usefetch custom hooks its logic is written in seperate fiele with is in the hooks folder
/*
import { usePostTitle } from "./Hooks/useFetch"

function App(){
  const postTitle = usePostTitle();
  return <div>
      <div>{postTitle}</div>
  </div>
}

export default App
*/


// this is original custom fetch hook it logic is same as above
/*
function App(){
  const [currentPost, setCurrentPost]=useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1" + currentPost);
  

  if(loading){
    return <div>
      Loading...
    </div>
  }
  return (
    <div>
      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(1)}>2</button>
      <button onClick={()=>setCurrentPost(1)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  );
}
export default App;
*/

/*
function App() {
  const [state, setstate] = useState(0);
  const prev = usePrev(state);
  return <>
    <div>
      <p>{state}</p>
      <button onClick={() => { setstate(cur => cur + 1) }}> Click me </button>
      <p>This is the pervious value{prev}</p>
    </div>
  </>
}


export default App
*/


//this is the logic of debounce 
//A debounce hook is a custom React Hook that delays updating a value (or executing a function) until a specified amount of time has passed since the last change.
// To avoid unnecessary calls (like API calls, search filters, or heavy calculations) that get triggered on every keystroke or state change.
// jaise hamre passs amoze ki website h ham use me type karte h , jab ham type karn chode dete h tab vo backed ko req bhej jab tka ham type kar rhae tab tak vo req na bhej apne bas rakhe use debounce kahte h req ko apne pass rkahna jab tak ek set ime nahi pass hojata 
/*
function useDebounce(originalFn){
  const currentcloack = useRef();
 
  const fn=()=>{
     clearTimeout(currentcloack.current);
     currentcloack.current = setTimeout(originalFn,200)
  }
  return fn;

}


function App(){
 
  function sendData(){
    fetch("");
  }

  const debouncedFn = useDebounce(sendData);

  return <>
  <input type="text" onChange={debouncedFn} />
  </>
}

export default App;
*/

const useDebounce = (value , delay) => {
  const [ debounceValue , setdebounceValue] = useState(value);

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setdebounceValue(value);
    },delay)

    return ()=>{
      clearInterval(handler);
    }
  },[value , delay])

  return debounceValue;
}




function App(){

  const [inputVal , setInputVal] = useDebounce();
  const debouncedValue = useDebounce(inputVal , 200)

  function change(e){
    setInputVal(e.target.value)
  }
  useEffect(()=>{
    console.log("expensive operation")
  },[debouncedValue])

  return <div>
    <input type="text" id="input" onChange={change}/>
  </div>
}

export default App

// libraray which is highly use is usehooks.com