import { Moviesgrid } from '../components/Moviesgrid' 
import { Search } from '../components/Search'

export function Landingpage(){
    return(
        <div>
            <Search/>
            <Moviesgrid/>
        </div>
    )
}