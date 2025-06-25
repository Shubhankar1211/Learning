// this is the usestate ,,react is used for making dynamic website
// the answer of simple question why simple variable do not work in the react
// the component isnt re-rendering , because we havent used a state variable
import { useState } from "react";

export function App(){
  return <div>
    <ToggleMessage/>
  </div>
}

function ToggleMessage(){
  const [isvisible, setisvisible] = useState(true)


function toggle(){
  setisvisible(!isvisible);
}

  return <div>
    <button onClick={toggle}>Toggle</button>{
      isvisible && <p>This message is conditionally rendered!</p>
    }
  </div>
}