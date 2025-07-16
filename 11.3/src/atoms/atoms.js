import { atomFamily,atom, selector, selectorFamily} from "recoil"
import axios from "axios";
import { TODOS } from "../Todos/todos";

export const NetworkAtom = atom({
    key : "NetworkAtom",
    default : 103
})

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 10
})

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
})

export const notificationAtom = atom({
    key : "notificationAtom",
    default : 15
})

// thisis how we get the sum of all the notufacton byh adding all the things
export const totalNotificationSelector = selector({
    key : "totalNotifactionSelector",
    get : ({get})=>{
        const NetworkAtomCount = get(NetworkAtom);
        const JobAtomCount = get(jobsAtom);
        const messagingAtomCount = get(messagingAtom);
        const notificationAtomCount = get(notificationAtom);
        return NetworkAtomCount + JobAtomCount + messagingAtomCount + notificationAtomCount
    }
})



// if an vlaue is coming form asynchoruns then is hoe you have to do it this is how we get the reqest from the backend 
export const totalNotifaction = atom({
    key : "notificationCount",
    default : selector({
        key : "notificationAtomSelector",
        get : async ()=>{
          const res = axios.get("")
          return res.data
        }
    })
}) 


// this is how we are making atom fmaily
export const todoAtomFamily = atomFamily({
   key : "todosAtomFamily",
   default : id =>{
    return TODOS.find(x=> x.id === id)
   },
})



// if you have to suppose to get vlaues froma backend and servers than selctors family is used whne we have have dynamic vlaues and atomsto get them we need selector family 
/*
export const todosAtomFamily2 = atomFamily({
    key : "notificationCount",
    default : selectorFamily({
        key : "todosAtomSelector",
        get :  (id) => async ({get})=>{
          const res = await axios.get(`{id}`);
          return res.data.todo
        },
    })
}) 
    */


// for loading use  useRecoilStateLoadabel & fro value useRecoilVlaueLoadable