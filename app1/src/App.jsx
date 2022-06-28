import { Moviesgrid } from "./Moviesgrid"
import styles from './App.module.css'

export function App(){
    return <div>
        <header><h1 className={styles.title}>Movies</h1></header>
        <main>
            {/*<ul>
                <li>peli1</li>
                <li>peli2</li>
                <li>peli3</li>
            </ul>*/}
            <Moviesgrid/>
        </main>
        </div>
}