import { Moviecard } from './Moviecard';
import movies from './movies.json'
import sytles from './Moviesgrid.module.css'

export function Moviesgrid(){
    console.log(movies)

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