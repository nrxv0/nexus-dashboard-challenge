import "../styles/statcards.css";
const StatCards = ()=>{
    return (
        <div className="stat-container">
            <h2>In the last 30 days</h2>
            <div className="statCards">
            <div className="card">
                <h2>30000</h2>
                <p>Booking Operations</p>
            </div>
            <div className="card">
                <h2>17000</h2>
                <p>Done Booking</p>
            </div>
            <div className="card">
                <h2>3000</h2>
                <p>Satisfied Clients</p>
            </div>
        </div>
        </div>
        
    )
}
export default StatCards;