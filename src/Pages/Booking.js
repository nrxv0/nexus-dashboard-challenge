import Sidebar from "../Components/Sidebar";
import "../styles/users.css";
import SearchBar from "../Components/SearchBar";
import LoyalCostumers from "../Components/LoyalCostumers";
import ProfileNotific from "../Components/PofileNotific";
import BookingTable from "../Components/BookingTable";
const Booking = () => {

    return(
        <div className="booking">
           <Sidebar/>
            <div className="content-container">
            <SearchBar/>

            <BookingTable/>
            </div>
            <div className="right-cont">
            <ProfileNotific/>
            <LoyalCostumers/>
            </div> 
        </div>
    )
}
export default Booking;