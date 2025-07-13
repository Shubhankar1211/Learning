

// custom hook
/*
export function usePostTitle() {
  const [post, setpost] = useState({});

  async function getPosts() {
    const response = await fetch("");
    const json = await response.json();
    setpost(json);
  }

  useEffect(function () {
    getPosts();
  }, [])
  return post.title;
}
  */

import { useEffect, useRef } from "react";














// thsi  is showing problem in dependancy array to resolve it we have to put it inot useffect;
/*
export function useFetch(url) {

  const [finalData, setData] = useState({})
  const [loading, setloading] = useState(true);

  async function getDetails() {
    setloading(true);
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    setloading(false);
  }

  useEffect(() => {
    getDetails();
  },[url])
  return {
    finalData,
    loading
  }
}
*/














// fetch hook
/*
export function useFetch(url) {
  const [finalData, setdata] = useState({});
  const [loading , setloading] = useState(true);

  useEffect(() => {
    async function getDetails() {
      setloading(true); // this will give a loading which is comes before the fetch
      const response = await fetch(url);
      const json = await response.json();
      setdata(json);
      setloading(false);
    }

    getDetails();
  }, [url]); // it is used beacuse every time this the componetns re render but it called only one time when it is mount that is why we use url in dependency array so that whenever compoennt rerender url mount everytime

  return { 
    finalData,
    loading
   };
}
*/















// this is use re-fetching hook 
// task waht if the post is updating and the is changing in  backend every 10 sec and i heve to get back the backend request every 10se
/*
export function useFetch(url) {
  const [finalData, setdata] = useState({});
  const [loading , setloading] = useState(true);

  
    async function getDetails() {
      setloading(true); // this will give a loading which is comes before the fetch
      const response = await fetch(url);
      const json = await response.json();
      setdata(json);
      setloading(false);
    }

    useEffect(()=>{
      getDetails();
    },[url])
   // it is used beacuse every time this the componetns re render but it called only one time when it is mount that is why we use url in dependency array so that whenever compoennt rerender url mount everytime


  useEffect(()=>{
    setInterval(getDetails, 10 * 1000) // htis is simple like i have siending req ot backend that koi change to nahi huaa h bhai
  },[url])

  return { 
    finalData,
    loading
   };
}
*/










// usePrev hook one of the hardest
// use prev is supose to show the previous value of the component

// what is the ref 
// this ref is use to store the value or app is value ko kitni hi par render kar lo ye ye componet ko re-redner nahi karta h 
// it returns first , efffect getsd called later

// this is the correct version of use prev to use 

export const usePrev = (value) => {
  const ref = useRef(); // first this line of the code will run

  useEffect(() => {
    ref.current = value; // after the last line is executed this updates to 1
  }, [value]) 


  return ref.current; // then this is will  run and retunr the value initally undefiend
}
  









// this is also working fine
/*

export function usePrev(value){
  const ref = useRef();

  useEffect(function(){
    ref.current = value;
  },[value])
  
  return ref.current;
}
  */
  






/* this is simple way to correct ht euper prev hook 
export function usePrev(value) {
  const ref = useRef();

  const prev = ref.current; // store the previous value

  useEffect(() => {
    ref.current = value; // update after render
  }, [value]);

  return prev; // return previous value (not current)
}
  */



// 