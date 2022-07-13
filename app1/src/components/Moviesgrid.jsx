import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Moviecard } from './Moviecard';
//import movies from './movies.json'
import sytles from './Moviesgrid.module.css'
import { Spinner } from './Spinner';
import { useQuery } from '../hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Empty } from './Empty';

export function Moviesgrid({search}){

    //let movies = [];

    //const moviesState = useState([]);

    //const movies = moviesState[0];
    //const setMovies = moviesState[1];

    //const[movies,setMovies] = moviesState;

    const [movies,setMovies] = useState([]);

    const [isloading,setIsloading] = useState(true);

    const [page,setPage] = useState(1);

    const [hasmore, sethasmore] = useState(true);

    //const location = useLocation();
    //console.log(location.search)

    /*const query = useQuery();
    
    const search = query.get("search")
    console.log(search)*/

    useEffect(()=>{
        setIsloading(true)
        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page : "/discover/movie?page=" + page;
        get(searchUrl).then((data) =>{
            setMovies((prevMovies)=> prevMovies.concat(data.results))
            sethasmore(data.page < data.total_pages)
            setIsloading(false)
            console.log(movies)
        });
    },[search,page]);

    /*if(isloading){
        return <Spinner/>
    }*/

    if(!isloading && movies.length === 0){
        return <Empty/> 
    }

    return (
        <InfiniteScroll 
        dataLength={movies.length} 
        hasMore={hasmore} 
        next={()=> setPage((prevPage) => prevPage + 1)}
        loader={<Spinner/>}>    
        <ul className={sytles.moviesGrid}>
                {
                    movies.map((movie)=>(
                        <Moviecard key={movie.id} movie={movie}/>
                    ))
                    
                }
        </ul>
        </InfiniteScroll>
    );
}