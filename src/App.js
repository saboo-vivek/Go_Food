import "./App.css";
import Home from "./screens/Home";
import {
  createBrowserRouter as Router,
  RouterProvider as Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <> 
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
