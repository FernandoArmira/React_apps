import movie from './movie.json'
import styles from './MovieDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';

export function MovieDetails(){

    const { movieId } = useParams();

    console.log(movieId)

    const [movie,setMovie] = useState(null)

    useEffect(()=>{
        get("/movie/" + movieId).then(data =>{
            setMovie(data);
        })
    },[movieId])

    if (!movie){
        return null
    }

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return(
        
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: </strong> {movie.title}</p>
                <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Description: </strong> {movie.overview} </p>
            </div>
            
            </div>
    )
}