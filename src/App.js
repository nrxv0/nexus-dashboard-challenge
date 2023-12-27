import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
import Booking from "./Pages/Booking";
import Dashboard from "./Pages/Dashboard";
import Rooms from "./Pages/Rooms";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      </div>
      
  );
}

export default App;
