import { useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, NetworkAtom, notificationAtom, totalNotificationSelector } from "./atoms/atoms"

function App() {


  return (
    <>
      <MyApp></MyApp>
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

export default App
