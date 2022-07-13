import styles from './Moviecard.module.css'
import {Link } from "react-router-dom";
//import placeholder from '../placeholder.jpg'
import { getMovieimage } from '../utils/getMovieimage';

export function Moviecard({movie}){
    //console.log(styles)
    const imageurl = getMovieimage(movie.poster_path,300)
    //const imageurl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;

    return(
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
            <img 
            width={230}
            height={345} 
            className={styles.movieImage} 
            src={imageurl} 
            alt={movie.title} />
            <div>{movie.title}</div>
            </Link>
        </li>
    );
}