import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
