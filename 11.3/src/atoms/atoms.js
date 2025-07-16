import {atom, selector,} from "recoil"

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