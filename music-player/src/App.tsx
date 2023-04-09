import "./App.css";
import Home from "./components/home/Home";
import MusicPlayer from "./components/musicplayer/MusicPlayer";
import Sidebar from "./components/sidebar/Sidebar";
import Topnav from "./components/topnav/Topnav";

function App() {
   return (
      <div className="container">
         <div className="wrapper">
            <Sidebar></Sidebar>
            <div className="mainSection">
               <Topnav></Topnav>
               <Home></Home>
            </div>
         </div>
         <MusicPlayer></MusicPlayer>
      </div>
   );
}

export default App;
