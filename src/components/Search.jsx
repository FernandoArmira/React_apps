import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';
//import { useEffect, useState } from 'react';

export function Search(){

    const query = useQuery()

    const search = query.get("search")

    //const [searchText,setsearchText] = useState("")

    const history = useNavigate();

    /*useEffect(()=>{
        setsearchText(search || "");

    },[search])*/

    const handleSubmit = (e) =>{
        e.preventDefault();
        //history("/?search=" + searchText)
    }

    return(
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" value={search ?? ""/*searchText*/} placeholder="Title" aria-label="Search Movies"
                onChange={(e)=>{
                    const value = e.target.value
                    //setsearchText(value)
                    history("/?search=" + value) //agregado
                    }}/>
                {/*<button className={styles.searchButton} type="submit">*/}
                <FaSearch size={20} color = "black" className={styles.searchButton}/>
                {/*</button>*/}
            </div>
        </form>
    )

}