import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Moviecard } from './Moviecard';
//import movies from './movies.json'
import sytles from './Moviesgrid.module.css'
import { Spinner } from './Spinner';
import { useQuery } from '../hooks/useQuery';


export function Moviesgrid(){

    //let movies = [];

    //const moviesState = useState([]);

    //const movies = moviesState[0];
    //const setMovies = moviesState[1];

    //const[movies,setMovies] = moviesState;

    const [movies,setMovies] = useState([]);

    const [isloading,setIsloading] = useState(true);

    //const location = useLocation();
    //console.log(location.search)

    const query = useQuery();
    
    const search = query.get("search")
    console.log(search)

    useEffect(()=>{
        setIsloading(true)
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
        get(searchUrl).then((data) =>{
            setMovies(data.results)
            setIsloading(false)
            console.log(movies)
        });
    },[search]);

    if(isloading){
        return <Spinner/>
    }

    return (
        <ul className={sytles.moviesGrid}>
                {
                    movies.map((movie)=>(
                        <Moviecard key={movie.id} movie={movie}/>
                    ))
                    
                }
            </ul>
    );
}