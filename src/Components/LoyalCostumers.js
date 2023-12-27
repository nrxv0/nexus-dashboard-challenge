import "../styles/loyal.css";
import user1 from "../img/user1.jpeg";
import user2 from "../img/user2.jpeg";
const LoyalCostumers = () => {

    return(
        <div className="loyal">
            <div className="loyal-container">
                <div className="loyal-user">
                    <img src={user1} alt="profile pic" />
                    <p>John Doe</p>
                    <p>+10 Bookings</p>
                </div>
                <div className="loyal-user">
                <img src={user2} alt="profile pic" />
                    <p>John Doe</p>
                    <p>+10 Bookings</p>
                </div>
            </div>
            <button>View All</button>
        </div>
    )
}
export default LoyalCostumers;