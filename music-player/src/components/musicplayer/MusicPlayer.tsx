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
   const [tracks, _] = useState([
      "Saucy_dog.mp3",
      "evening.mp3",
      "night-sky.mp3",
      "KohanaLam.mp3",
      "abandoned_house.mp3",
   ]);
   const [trackIndex, setTrackIndex] = useState<number>(0);
   const [currentTime, setCurrentTime] = useState<any>(0);
   const [songDuration, setSongDuration] = useState<any>(0);
   const [repeatColor, setRepeatColor] = useState("a0a0a0");

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
      }, 200);
   };

   const handleNextTrack = () => {
      const currentIndex = trackIndex == tracks.length - 1 ? 0 : trackIndex + 1;
      setTrackIndex(currentIndex);

      setSongDuration(audioElementRef.current?.duration);
      handlePlayPromise();
   };

   const handlePreviousTrack = () => {
      setSongDuration(audioElementRef.current?.duration);

      const currentIndex = trackIndex == tracks.length - 1 ? 0 : trackIndex - 1;
      console.log(currentIndex);

      if (currentIndex <= -1) {
         setTrackIndex(tracks.length - 1);
         handlePlayPromise();
         return;
      }

      setTrackIndex(currentIndex);
      handlePlayPromise();
   };

   const handleRepeat = () => {
      setRepeatColor(repeatColor === "a0a0a0" ? "FFFFFF" : "a0a0a0");

      if (audioElementRef.current?.loop != undefined) {
         audioElementRef.current.loop = true;
         // audioElementRef.current?.load();
         handlePlayPromise();
      }
   };

   const handlePlayPromise = () => {
      const playPromise = audioElementRef.current?.play();
      if (playPromise != undefined) {
         playPromise
            ?.then((_) => {
               audioElementRef.current?.pause();
               if (audioElementRef.current?.currentTime != undefined) {
                  // audioElementRef.current.currentTime = 0;
                  audioElementRef.current?.play();
               }
            })
            .catch((err) => console.error(`error loading the video ${err}`));
      }
   };

   const handleDrag = (event: React.ChangeEvent) => {
      let input = event.target as HTMLInputElement
      setCurrentTime(input.value);

      if (audioElementRef.current?.currentTime != undefined) {
         audioElementRef.current.currentTime = parseInt(input.value);
      }
   };

   return (
      <div className={styles.player}>
         <div className={styles.leftsection}>Left</div>
         <div className={styles.centersection}>
            <div className={styles.controls}>
               <audio ref={audioElementRef} src={tracks[trackIndex]}></audio>
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
                     onClick={handlePreviousTrack}
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
               <div className={styles.next} onClick={handleNextTrack}>
                  <BiSkipNext
                     style={{ cursor: "poniter" }}
                     size={30}
                  ></BiSkipNext>
               </div>
               <div className={styles.repeat} onClick={handleRepeat}>
                  <BiRepeat
                     style={{ cursor: "poniter" }}
                     size={25}
                     color={`#${repeatColor}`}
                  ></BiRepeat>
               </div>
            </div>
            <div className={styles.progress}>
               <input
                  type="range"
                  className={styles.progress}
                  id="file"
                  value={currentTime}
                  min={0}
                  max={songDuration}
                  onChange={handleDrag}
               />
            </div>
         </div>
         <div className={styles.rightsection}>Right</div>
      </div>
   );
};

export default MusicPlayer;
