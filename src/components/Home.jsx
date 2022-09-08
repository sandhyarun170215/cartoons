import useFetch from "./useFetch";
import Animeslist from "./Animeslist";

const Home = () =>{

    let{data: animes, pending, error}= useFetch("https://api.jikan.moe/v4/anime")
    
    return(
        <div>
            

            <h1>Display all animes</h1>

           {pending && <h1>loading......</h1>}

           {animes && <Animeslist animes={animes}/>}
        </div>
    );
}
export default Home;