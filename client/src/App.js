//cd Pro/BOOKING_APP/client
//39:50
import{BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import List from "./pages/list/List";
import Home from './pages/home/Home';
import Hotel from "./pages/Hotel/hotel";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element = {<Home/>} /> 
      <Route path="/hotels"element = {<List/>} /> 
      <Route path="/hotels/:id"element = {<Hotel/>} /> 
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
