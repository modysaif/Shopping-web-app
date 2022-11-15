import { useEffect, useState } from "react";


export   const useCustomHook =  (url)=> {
   const [data , setData] = useState([])
   const rap = async ()=>{
    const api = await fetch(url)
    const res = await api.json()
    setData(res)
  
   }

   useEffect(()=>{
    rap()
   },[])
   return {data , setData}
}