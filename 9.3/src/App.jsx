

/*
function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh", paddingTop: 50 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PostComponent
          name="udit"
          followerCount="500 followers"
          time="25 mins"
          description="Finally got placed at 50 LPA and very happy about it! Thanks to everyone who supported me. 🚀"
        />
        <br />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PostComponent
          name="Shubhankar"
          followerCount="1000 followers"
          description="i am a fullstack deveploper"
        />
        <br />
      </div>
    </div>
  );
}
  */
/*
const style = {
  width: 400,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid #ccc",
  display: "flex",
  flexDirection: "column",
  padding: 16,
  color: "#2d3436",
  fontFamily: "Arial, sans-serif",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

function PostComponent({ name, followerCount, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <img
          src={image}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            marginRight: 12
          }}
          alt="profile"
        />

        <div style={{ fontSize: 14 ,marginLeft: 10 }}>
          <b>{name}</b>
          <div>{followerCount}</div>


          {time!== undefined && <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
            <div>{time}</div>
            <img
              src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
              style={{ width: 12, height: 12 }}
              alt="clock"
            />
          </div>}


        </div>
      </div>

      <div style={{ fontSize: 14, marginBottom: 12 }}>
        {description}
      </div>

      <div
        style={{
          borderTop: "1px solid #eee",
          display: "flex",
          justifyContent: "space-around",
          fontSize: 14,
          color: "#636e72",
          paddingTop: 8
        }}
      >
        <span>👍 Like</span>
        <span>💬 Comment</span>
        <span>🔁 Share</span>
      </div>
    </div>
  );
}

export default App;
*/






// this is the compbine version of state and componets maked an dynamic postcomponents
/*import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  
  const postList = posts.map((post, index) => (
    <PostComponent
      key={index} 
      name={post.name}
      followerCount={post.followerCount}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  
  function addPost() {
    setPosts([
      ...posts,
      {
        name: "udit",
        followerCount: "500 followers",
        time: "25 mins",
        image: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
        description:
          "Finally got placed at 50 LPA and very happy about it! Thanks to everyone who supported me. 🚀"
      }
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh", paddingTop: 50 }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {postList}
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
*/

// learned about the useeffect it is a stopwatch 
/*import { useEffect, useState } from "react"
function App(){

const [count , setcount] = useState(1);

function increment(){
  setcount(count => count+1);
}

useEffect(function(){
  setInterval(increment,1000); /// this on woork on time when the fucntion mount
},[])

useEffect(function(){
  console.log("the count has been updated to " + count) // this line first render when the function mount first time then it wil change when the value of count is changed this is used when we have to give request tot the backend that react is changed
},[count])

  return <div>
      {count}
  </div>
}

export default App
*/


// this is we are making linkdin top bar 
/*
import { useState } from "react"
function App(){

const [currenttab, setcurrenttab]= useState("feed")


  return <div>
       <button onClick={function(){setcurrenttab("home")}} style={{color : currenttab == "home" ? "red" : "black" }}>home</button>
       <button onClick={function(){setcurrenttab("job")}} style={{color : currenttab == "job" ? "red" : "black" }}>job </button>
       <button onClick={function(){setcurrenttab("notification")}} style={{color : currenttab == "notification" ? "red" : "black" }}>notification</button>
       <button onClick={function(){setcurrenttab("messages")}} style={{color : currenttab == "messages" ? "red" : "black" }}>messages</button>
       
  </div>

export default App
*/


// better version of above
/*
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [currenttab, setcurrenttab] = useState("feed");

  return (
    <div>
      <button
        onClick={() => setcurrenttab("home")}
        style={{ color: currenttab === "home" ? "red" : "black" }}
      >
        home
      </button>

      <button
        onClick={() => setcurrenttab("job")}
        style={{ color: currenttab === "job" ? "red" : "black" }}
      >
        job
      </button>

      <button
        onClick={() => setcurrenttab("notification")}
        style={{ color: currenttab === "notification" ? "red" : "black" }}
      >
        notification
      </button>

      <button
        onClick={() => setcurrenttab("messages")}
        style={{ color: currenttab === "messages" ? "red" : "black" }}
      >
        messages
      </button>

    </div>
  );
}

*/

import { useState, useEffect } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  


  useEffect(function () {
     let clock = setInterval(function () {
      setcount(count => count + 1)
    }, 1000)



    return function(){ // so this is the clena up logic
    clearInterval(clock)
    }
  }, [])


  return <div>
    <button>{count}</button>
    <Counter></Counter>
  </div>
}

export default Counter;





// thsi is the way  in which counter starts from button
function Counter1() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let clock;

    if (isRunning) {
      clock = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    // Cleanup interval when component unmounts or when isRunning becomes false
    return () => {
      clearInterval(clock);
    };
  }, [isRunning]); // useEffect re-runs when `isRunning` changes

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
    </div>
  );
}


