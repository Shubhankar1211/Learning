/* so to use routing we can write it manually but sake of good use and easy making we cna use react library
which route-router-dom
this is the way we which create route 


import { BrowserRouter, Routes, Route , Link } from "react-router-dom"

function App() {
  return <div>
    <BrowserRouter>
    <Link to={"/"}>PW</Link>
    <Link to={"/neet/online-coaching-class-11"}>11 Neet</Link>
    <Link to={"/neet/online-coaching-class-12"}>12 Neet</Link>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing(){
  return <div>
      welcome to pw
  </div>
}

function Class11Program(){
  return <div>
    Neet programs for class 11th
  </div>
}
function Class12Program(){
  return <div>
    Neet programs for class 12th
  </div>
}

export default App


//
this is the one  way to navigate  this is directly used when we haave to button click and navigate to the diffrent route or page
<Link to={"/"}>PW</Link>
    <Link to={"/neet/online-coaching-class-11"}>11 Neet</Link>
    <Link to={"/neet/online-coaching-class-12"}>12 Neet</Link>

// other way to navigate when we have an condtition like we have to navigate back to landing page after 10 min  
// for this we use navigate hook

function Class11Program(){
  return <div>
    Neet programs for class 11th
  </div>
}
function Class12Program(){
 const navigate = useNavigate();

 function redirecting(){
  navigate("/")
 }

  return <div>
    Neet programs for class 12th
    <button onClick={redirecting}>Go back to the landing page</button>
  </div>
}

// useref is a hhok that provides a way to create a reference to a value or a dom elemenet persisits across renders but does not
trigger a re-render when the value changes 

key characteristics of useref:
persistent across renders: the vlaue stored in useref persists between components re-rneders .this menas the value of a ref does not get reset when the component re -renders,unlike regualr vaiables

no  re-renders on change : changing the value of a ref does not cause a component to re-rneder .thsi is differnet from state , which triggers a re -render when updated



*/