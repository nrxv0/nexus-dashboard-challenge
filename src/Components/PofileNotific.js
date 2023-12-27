import "../styles/proNotif.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faUser} from '@fortawesome/free-solid-svg-icons'
import user1 from "../img/user1.jpeg";

const ProfileNotific = () =>{

    return(
        <div className="pro-notif">
            <div class="user-details">
            <img src={user1} alt="profile pic" />
                <span class="user-name">John Doe</span>
            </div>
            <span class="notification-icon">
                <FontAwesomeIcon icon={faBell} />
            </span>
            
        </div>
    )
}
export default ProfileNotific;