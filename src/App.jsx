import { Moviesgrid } from "./components/Moviesgrid"
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { Landingpage } from "./pages/Landingpage";


export function App(){
    return (
    <Router>
        <header>
            <Link to="/">
            <h1 className={styles.title}>Movies</h1>
            </Link>  
        </header>
        <main>
            {/*<ul>
                <li>peli1</li>
                <li>peli2</li>
                <li>peli3</li>
            </ul>*/}
            <Routes>
                <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
                <Route path="/" element={<Landingpage/>}/>
                <Route path="*" element={<Navigate replace to ="/"/>}/>
  
            </Routes>
        </main>
    </Router>)
}