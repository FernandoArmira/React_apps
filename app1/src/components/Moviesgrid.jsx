import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Moviecard } from './Moviecard';
//import movies from './movies.json'
import sytles from './Moviesgrid.module.css'

export function Moviesgrid(){

    //let movies = [];

    //const moviesState = useState([]);

    //const movies = moviesState[0];
    //const setMovies = moviesState[1];

    //const[movies,setMovies] = moviesState;

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        get("/discover/movie").then((data) =>{
            setMovies(data.results)
            console.log(movies)
        });
    },[]);

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