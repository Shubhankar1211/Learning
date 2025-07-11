import { useEffect, useState } from "react";

// custom hook
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

// thsi  is showing problem in dependancy array to resolve it we have to put it inot useffect;
/*
export function useFetch(url){
    const [ finalData , setData ] = useState({})

    async function getDetails(){
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
    }

    useEffect(()=>{
       getDetails();
    },[])
    return {finalData}
}
*/



export function useFetch(url) {
  const [finalData, setdata] = useState({});

  useEffect(() => {
    async function getDetails() {
      if (!url) return;
      const response = await fetch(url);
      const json = await response.json();
      setdata(json);
    }

    getDetails();
  }, [url]);

  return { finalData };
}
