import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../styles/searchbar.css";

const SearchBar = () =>{

    return(
        <div className="searchbar">
            <input type="text" placeholder="Search ..." />
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </div>
    )
}
export default SearchBar;