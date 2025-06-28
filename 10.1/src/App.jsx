// this is the simple logic of the routing
import { BrowserRouter, Routes, Route, Link, useNavigate , Outlet } from "react-router-dom"

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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

    <Link to={"/"}>PW</Link>
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
