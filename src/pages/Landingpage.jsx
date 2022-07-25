import { useSearchParams } from 'react-router-dom';
import { Moviesgrid } from '../components/Moviesgrid' 
import { Search } from '../components/Search'
import { useDebounce } from '../hooks/useDebounce';
//import { useQuery } from '../hooks/useQuery';

export function Landingpage(){

    const [query] = useSearchParams()

    const search = query.get("search")

    const debouncedSearch = useDebounce(search,300)

    return(
        <div>
            <Search/>
            <Moviesgrid key={debouncedSearch /*search*/} search={debouncedSearch /*search*/}/>
        </div>
    )
}