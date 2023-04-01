import React from "react";

import styles from "./Settings.module.css";

const Settings = () => {
   return (
      <div className={styles.container}>
         <li>Account</li>
         <li>Profile</li>
         <li>Upgrade to Premium</li>
         <li>Private Session</li>
         <li>Settings</li>
         <li>Update Spotify now</li>
         <li>Log out</li>
      </div>
   );
};

export default Settings;