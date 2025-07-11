// here are custom hooks learning

import { useFetch } from "./Hooks/useFetch"


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
function App(){
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  return (
    <div>
      {JSON.stringify(finalData)}
    </div>
  );
}
export default App;
