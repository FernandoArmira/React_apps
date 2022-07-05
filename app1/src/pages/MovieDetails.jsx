import movie from './movie.json'
import styles from './MovieDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';

export function MovieDetails(){

    const { movieId } = useParams();

    console.log(movieId)

    const [isloading,setIsloading] = useState(true);

    const [movie,setMovie] = useState(null)


    useEffect(()=>{
        setIsloading(true);

        get("/movie/" + movieId).then(data =>{
            setMovie(data);
            setIsloading(false);
        })
    },[movieId])

    if(isloading){
        return (
            <Spinner/>
        )
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