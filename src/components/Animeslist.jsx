import { useEffect, useState } from "react";

const Animeslist = ({animes}) => { //destructuring {animes},accept
    
    let[wish , setWish] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("wish")==null)  //if wish array(WISH LIST) is not present before then only you add wish array
        {
            localStorage.setItem("wish","[]");
        }
                
    },[])

    let handleWishlist = (id)=>{        //get that heart button
       let x = localStorage.getItem("wish");
       
       x = JSON.parse(x) //covert to json TO JS

       if(!x.includes(id)) //if id is not present then it will push(ADD)
       {
        alert("added to wishlist")
        x.push(id);
        x = JSON.stringify(x) //string manner(js to json convert)
        localStorage.setItem("wish",x); 
        console.log(x,typeof x);
       }
       else{
        //alert("items already added to wishlist");
        alert("remove from wishlist")
        let i=x.indexOf(id);
        x.splice(i, 1);
        x=JSON.stringify(x);
        localStorage.setItem("wish",x);
    }
}

    return ( 
        <div className="animes-list d-grid justify-content-center">
            {
                //map itirate number of time you give thevalue
                //single value represent(anime)
                animes.map((anime)=>{
                    return(
                        <div key={anime.mal_id} className="anime">
                            <img src={anime.images.jpg.large_image_url} alt="poster not found" /><br></br>
                            <h2> Anime : {anime.title}</h2>
                            <h2>Ratings :{anime.score}</h2>
                            {/* <button onClick={()=>{handleWishlist(anime.mal_id)}}>&#10084;</button>*/}
                            <button id="btn" onClick={()=>{handleWishlist(anime.mal_id)}}>&#10084;</button>



                        {/* <iframe src={anime.trailer.url} ></iframe>
                           <h1>{anime.aired.string}</h1>
                            <h1>Duration:{anime.duration}</h1>
                            <h1>{anime.broadcast.string}</h1> */}

                            
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Animeslist;