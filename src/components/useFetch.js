import { useEffect } from "react";
import { useState } from "react";

const useFetch = (request) => {

    const[data, setdata] = useState(null);
    const[pending, setpending] = useState(true);
    const[error, seterror] = useState(null);

    useEffect(()=>{
        setTimeout(() => {

            fetch(request)
            .then((response)=>{
            if(response.ok===false)
            {
                throw Error("data not found !");
            }
            return response.json() })
            .then((receivedData)=>{setdata(receivedData.data); setpending(false)})
            .catch((error)=>{ seterror(error.message); setpending(false)})

            
        }, 1000);
    },[])
    return{data, pending, error};

}
export default useFetch;