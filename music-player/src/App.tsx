import "./App.css";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topnav from "./components/topnav/Topnav";

function App() {
   return (
      <div className="container">
         <div className="wrapper">
         <Sidebar></Sidebar>
         <Topnav></Topnav>
         {/* <Home></Home> */}

         </div>

         <div className="player"></div>
      </div>
   );
}

export default App;
