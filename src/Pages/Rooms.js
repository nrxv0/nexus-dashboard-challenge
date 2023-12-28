import Sidebar from "../Components/Sidebar";
import "../styles/users.css";
import SearchBar from "../Components/SearchBar";
import LoyalCostumers from "../Components/LoyalCostumers";
import ProfileNotific from "../Components/PofileNotific";
import RoomsTable from "../Components/RoomsTable";
const Rooms = () =>{
    return(
        <div className="rooms">
            <Sidebar/>
            <div className="content-container">
            <SearchBar/>
            <RoomsTable/>
            </div>
            <div className="right-cont">
            <ProfileNotific/>
            <LoyalCostumers/>
            </div>
        </div>
    )
}
export default Rooms;