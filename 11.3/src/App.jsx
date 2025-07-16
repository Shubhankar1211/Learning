import { useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, NetworkAtom, notificationAtom, todoAtomFamily, totalNotificationSelector } from "./atoms/atoms"

function App() {


  return (
    <>
    <RecoilRoot>
      <MyApp></MyApp>
      <Todo id ={1}></Todo>
      <Todo id ={2}></Todo>
    </RecoilRoot>
    </>
  )
}

function MyApp() {

  const networkNotificationCount = useRecoilValue(NetworkAtom)
  const jobsnotification = useRecoilValue(jobsAtom)
  const Messagingnotifation = useRecoilValue(messagingAtom)
  const notficationCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
    
  return (
    <>
    <button>Home</button>

    <button>My Network({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs({jobsnotification})</button>
    <button>Messaging({Messagingnotifation})</button>
    <button>Notification({notficationCount})</button>

    <button>Me({totalNotificationCount})</button>
    </>
  )
}



// this is learn the concept of atom family
//atom family return the atom unde rthe hood when ever the id is passed down is create a dynamic atoms for id
function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return (
    <>
    {currentTodo.title}
    {currentTodo.description}
    <br />
    </>
  )
}


export default App
