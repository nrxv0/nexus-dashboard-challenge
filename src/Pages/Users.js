import UsersTable from "../Components/UsersTable";
import Sidebar from "../Components/Sidebar";
import StatCards from "../Components/StatCards";
import "../styles/users.css";
const Users = () => {
    console.log("Users component rendered");

    return(
        <div className="users">
            
            <Sidebar/>

            <div className="content-container">
            <StatCards/>
            <UsersTable/>
            </div>
           
        </div>
    )
}

export default Users;