// this is the simple logic of the routing and navigating and layout
/*
import { BrowserRouter, Routes, Route, Link, useNavigate , Outlet } from "react-router-dom"

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/neet" element={<Layout />}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route index element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      Footer | Contact Us
    </BrowserRouter>
  </div>
}


function Layout() {
  return <div style={{ height: "100vh" }}>
    <Header></Header>
    <div style={{ height: "90vh" }}>
      <Outlet />
    </div>
    footer
  </div>
}


function Header() {
  return <div>

    <Link to={"/neet"}>PW</Link>
    <Link to={"/neet/online-coaching-class-11"}>11 Neet</Link>
    <Link to={"/neet/online-coaching-class-12"}>12 Neet</Link>

  </div>
}


function Landing() {
  return <div>
    welcome to pw
  </div>
}



function Class11Program() {
  return <div>
    Neet programs for class 11th
  </div>
}




function Class12Program() {
  const navigate = useNavigate();

  function redirecting() {
    navigate("/")
  }

  return <div>
    Neet programs for class 12th
    <button onClick={redirecting}>Go back to the landing page</button>
  </div>
}


function ErrorPage() {
  return <div>
    No page is found
  </div>
}

export default App

*/




// this is the one way to write focus on an element but it is not hte generic way 
/*
function App(){

function Getfocuson(){
  document.getElementById("name").focus()
}

  return <div>
    sign up
     <input type="text" id="name" />
     <input type="text"  id="password" />
     <button onClick={Getfocuson}>Submit</button>
  </div>
}


export default App
*/
// by using useref hook we can also do the samae thing which we have done above
// one imp use of useref is to focussing on an input box
/*
import React,{useRef} from "react"

function App(){

 const inputref = useRef(null)

function Getfocuson(){
  inputref.current.focus()
}

  return <div>
    sign up
     <input  ref={inputref} type="text" id="name" />
     <input type="text"  id="password" />
     <button onClick={Getfocuson}>Submit</button>
  </div>
}

export default App
*/


// second use case of useref is that we have to update the value but do not fully upadte the componet 
// refernce to a vlaue , such that when u change the value , the component does not re-renders
import { useRef, useState } from "react"
function App(){

  const [count , setcount] = useState(1)
  //let timer =0; // this will not work it will beacue zeroa gian when the component  re-render 
  //const [ timer ,setimer] =useState(0)  // this is how it will work 
   const timer = useRef();// this is the best practice it save the one render and also it is used when we dont want to put this in dom or in return

function Start(){
   let value = setInterval(() => {
      setcount(count=>count+1)
    }, 1000);
    //setimer(value)
    timer.current =value

}

function Stop(){
  clearInterval(timer.current)
}

  return <div>
     {count}
     <br />
     <button onClick={Start}>Start</button>
     <button onClick={Stop}>Stop</button>
  </div>
}

export default App
