import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import {
   createBrowserRouter as Router,
   RouterProvider as Routes,
   Route,
   Link,
} from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";

const router = Router([
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/creatuser", element: <Signup /> },
  //  { path: "/cart", element: <Cart /> },
]);

function App() {
   return (
      <CartProvider>
         <Routes router={router} />
      </CartProvider>
   );
}

export default App;
