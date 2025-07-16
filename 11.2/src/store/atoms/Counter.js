import {atom, selector} from "recoil"

export const counterAtom = atom({
    default : 0,
    key : "Counter"
})


// this is derived state it is a collector and if used make diffrent folder
export const evenSelector = selector({
    key : "isEvenSelector",
    get : function({ get }){ // this get is the key whneever the component re-renders react check get and updated the changes 
    const currentCount = get(counterAtom); // it is the dependacy whome it is depend on
    const isEven = (currentCount % 2 ==0);
    return isEven
    }
})