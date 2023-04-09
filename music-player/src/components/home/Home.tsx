import React from "react";
import MusicGroups from "../musicgroups/Musicgroups"
import styles from "./Home.module.css";

const Home = () => {
   return (
      <div className={styles.container}>
         <MusicGroups></MusicGroups>
      </div>
   );
};

export default Home;
