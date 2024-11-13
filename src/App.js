//Import Area
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Error404 from "./Pages/Error404";



//RFC
  function App() {  
   //1. State/Hook Variable

    //2.Functions

    //3.Return Statement JSX
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
      );
    }

    export default App;
