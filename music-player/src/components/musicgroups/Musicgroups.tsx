import React from "react";
import styles from "./Musicgroups.module.css";
import Card from "../card/Card";
const MusicGroups = () => {
   return (
      <div>
         <h3>Recently Played</h3>
         <div className={styles.music_metadata}>
            <div className={styles.metadata}>
               <div className={styles.meta_image}>
                  <img
                     src="https://i.scdn.co/image/ab67616d0000b2736c795df60a32c2e9448a0cd9"
                     alt=""
                  />
                  <p className={styles.meta_title}>The End of Yesterday</p>
                  <p className={styles.meta_artist}>Ellegarden</p>
               </div>
            </div>
            <div className={styles.metadata}>
               <div className={styles.meta_image}>
                  <img
                     src="https://images.unsplash.com/photo-1680181562667-f1b789ff53d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                     alt=""
                  />
               </div>
               <p className={styles.meta_title}>Lost In the Woods</p>
               <p className={styles.meta_artist}>Kalafina</p>
            </div>
            <div className={styles.metadata}>
               <div className={styles.meta_image}>
                  <img
                     src="https://images.unsplash.com/photo-1680492260903-2c8ba2b97521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                     alt=""
                  />
                  <p className={styles.meta_title}>Garden Side Chat</p>
                  <p className={styles.meta_artist}>Love Holiday</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MusicGroups;
