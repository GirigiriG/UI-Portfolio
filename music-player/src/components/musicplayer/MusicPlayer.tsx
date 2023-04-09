import React, { useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";

import { BiShuffle } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import { BiPause } from "react-icons/bi";
import { BiRepeat } from "react-icons/bi";

const MusicPlayer = () => {
   const [isPlaying, setIsPlaying] = useState<Boolean>(true);
   const [currentSong, setCurrentSong] = useState<string>("evening.mp3");
   const [currentTime, setCurrentTime] = useState<any>(0);
   const [songDuration, setSongDuration] = useState<any>(0);
   const audioElementRef = useRef<HTMLAudioElement>(null);

   const handleIsPlaying = () => {
      setSongDuration(audioElementRef.current?.duration);
      isPlaying === true
         ? audioElementRef.current?.play()
         : audioElementRef.current?.pause();
      setIsPlaying(!isPlaying);
      setAudioTime(audioElementRef);
   };

   const setAudioTime = (audio: React.RefObject<HTMLAudioElement>) => {
      setInterval(() => {
         setCurrentTime(audio.current?.currentTime);
      }, 1000);
   };

   const handleNextTrack = () => {
      setCurrentSong("night-sky.mp3");
      console.log(currentSong);
   };

   return (
      <div className={styles.player}>
         <div className={styles.leftsection}>Left</div>
         <div className={styles.centersection}>
            <div className={styles.controls}>
               <audio
                  ref={audioElementRef}
                  controls
                  style={{ display: "none" }}
               >
                  <source src={currentSong} type="audio/mp3" />
               </audio>
               <div className={styles.shuffle}>
                  <BiShuffle
                     style={{ cursor: "poniter" }}
                     size={25}
                  ></BiShuffle>
               </div>
               <div className={styles.previous}>
                  <BiSkipPrevious
                     style={{ cursor: "poniter" }}
                     size={30}
                  ></BiSkipPrevious>
               </div>
               <div className={styles.play_pause} onClick={handleIsPlaying}>
                  {isPlaying === true ? (
                     <BiPlay
                        style={{ cursor: "poniter" }}
                        size={30}
                        color={"black"}
                     ></BiPlay>
                  ) : (
                     <BiPause
                        style={{ cursor: "poniter" }}
                        size={30}
                        color={"black"}
                     ></BiPause>
                  )}
               </div>
               <div className={styles.next}>
                  <BiSkipNext
                     style={{ cursor: "poniter" }}
                     size={30}
                     onClick={handleNextTrack}
                  ></BiSkipNext>
               </div>
               <div className={styles.repeat}>
                  <BiRepeat style={{ cursor: "poniter" }} size={25}></BiRepeat>
               </div>
            </div>
            <div className={styles.progress}>
               <progress
                  className={styles.progress}
                  id="file"
                  value={currentTime}
                  max={songDuration}
               ></progress>
            </div>
         </div>
         <div className={styles.rightsection}>Right</div>
      </div>
   );
};

export default MusicPlayer;
