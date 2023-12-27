import UsersTable from "../Components/UsersTable";
import Sidebar from "../Components/Sidebar";
import StatCards from "../Components/StatCards";
import "../styles/users.css";
import SearchBar from "../Components/SearchBar";
import LoyalCostumers from "../Components/LoyalCostumers";
import ProfileNotific from "../Components/PofileNotific";
const Dashboard = () => {


    return(
        <div className="Dashboard">
            <Sidebar/>
            <div className="content-container">
            <SearchBar/>
            
            <StatCards/>
            <UsersTable/>
            </div>
            <div className="right-cont">
            <ProfileNotific/>
            <LoyalCostumers/>
            </div>
        </div>
    )
}

export default Dashboard;