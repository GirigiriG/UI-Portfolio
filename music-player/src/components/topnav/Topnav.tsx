import React, { useState } from "react";
import styles from "./Topnav.module.css";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { IoMdArrowDropdown } from "react-icons/io";
import Settings from "../settings/Settings";

const Topnav = () => {
   const [isSetting, setIsSetting] = useState(false);

   return (
      <div className={styles.container}>
         <div className={styles.directions}>
            <div className={styles.left}>
               <MdOutlineArrowBackIosNew color="#fff" />
            </div>
            <div className={styles.right}>
               <MdOutlineArrowForwardIos />
            </div>
         </div>
         <div className={styles.profileSettings}>
            <div
               className={styles.profile}
               onClick={() => setIsSetting(!isSetting)}
            >
               <div className={styles.user}>
                  <div className={styles.icon}>
                     <SlUser size={15} />
                  </div>
                  <p>Gideongirigiri</p>
               </div>
               <IoMdArrowDropdown size={25} style={{ marginRight: "10px" }} />
            </div>
            <div className={styles.settings}>
               {isSetting === true && <Settings />}
            </div>
         </div>
      </div>
   );
};

export default Topnav;
