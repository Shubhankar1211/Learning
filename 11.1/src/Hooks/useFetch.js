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
  }, [url]); // it is used beacuse  every time this the componetns re render but it called only one time when it is mount that is why we use url in dependency array so that whenever compoennt rerender url mount everytime

  return { 
    finalData,
    loading
   };
}

