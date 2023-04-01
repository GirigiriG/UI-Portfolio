import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Sidebar = () => {
   return (
      <div className={styles.container}>
         <div className={styles.sidebar_nav}>
            <li>
               <AiOutlineHome size={22} style={{ marginRight: "5px" }} />
               Home
            </li>
            <li>
               <AiOutlineSearch size={22} style={{ marginRight: "5px" }} />
               Search
            </li>
            <li>
               <BiLibrary size={22} style={{ marginRight: "5px" }} />
               Your Library
            </li>

            <li>
               <div className={styles.create_playlist}>
                  <AiOutlinePlus size={18} color="black" />
               </div>
               Create Playlist
            </li>
            <li>
               <div className={styles.heart}>
                  <AiFillHeart size={18} color="hotpink" />
               </div>
               Liked Songs
            </li>
            <li>
               <div className={styles.bookmark}>
                  <BsFillBookmarkHeartFill size={18} color="#ffffff" />
               </div>
               Your Episodes
            </li>
            <li>
               <div className={styles.spacer}></div>
            </li>
         </div>
      </div>
   );
};

export default Sidebar;
