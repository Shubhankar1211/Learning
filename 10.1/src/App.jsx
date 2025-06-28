// this is the simple logic of the routing
import { BrowserRouter, Routes, Route , Link, useNavigate } from "react-router-dom"

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
 const navigate = useNavigate();

 function redirecting(){
  navigate("/")
 }

  return <div>
    Neet programs for class 12th
    <button onClick={redirecting}>Go back to the landing page</button>
  </div>
}

export default App
