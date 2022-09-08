import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Animeslist from "./Animeslist";

const Wishlist = () => {
    let{data: animes, pending, error}= useFetch("https://api.jikan.moe/v4/anime")
    const[wish ,setWish]=useState(null);

    useEffect(()=>{
        var wish = localStorage.getItem("wish")
        wish=JSON.parse(wish);
        setWish(wish);


    }, [])
    return ( 
        <div>
            <h1>Display all animes</h1>

           {pending && <h1>loading......</h1>}

           {animes && <Animeslist animes={animes}/>}

        </div>
     );
}
 
export default Wishlist;