import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assignment5 from "./Assignment5";
import Assignment6 from "./Assignment6";
import Assignment7 from"./Assignment7";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Assignment5" element={<Assignment5 />} />
          <Route path="/Assignment6" element={<Assignment6 />} />
          <Route path="/Assignment7" element={<Assignment7/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
