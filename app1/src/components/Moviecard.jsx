import styles from './Moviecard.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export function Moviecard({movie}){
    //console.log(styles)
    const imageurl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

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