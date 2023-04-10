import React, { useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";

import {
   BiShuffle,
   BiSkipPrevious,
   BiSkipNext,
   BiPlay,
   BiPause,
   BiRepeat,
} from "react-icons/bi";
import { FiVolume1, FiVolume2 } from "react-icons/fi";

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
   const [volume, setVolume] = useState<number>(20);
   const [songDuration, setSongDuration] = useState<any>(0);
   const [repeatColor, setRepeatColor] = useState("a0a0a0");

   const audioElementRef = useRef<HTMLAudioElement>(null);

   audioElementRef.current?.addEventListener("loadedmetadata", () => {
      setSongDuration(audioElementRef.current?.duration);
   });

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
      }, 10);
   };

   const handleNextTrack = () => {
      const currentIndex = trackIndex == tracks.length - 1 ? 0 : trackIndex + 1;
      setTrackIndex(currentIndex);

      handlePlayPromise();
   };

   const handlePreviousTrack = () => {
      const currentIndex = trackIndex == tracks.length - 1 ? 0 : trackIndex - 1;

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
                  audioElementRef.current?.play();
               }
            })
            .catch((err) => console.error(`error loading the video ${err}`));
      }
   };

   const handleSeek = (event: React.ChangeEvent) => {
      let target = event.target as HTMLInputElement;
      setCurrentTime(target.value);

      if (audioElementRef.current?.currentTime != undefined) {
         audioElementRef.current.currentTime = parseInt(target.value);
      }
   };

   const handleVolume = (event: React.ChangeEvent) => {
      let target = event.target as HTMLInputElement;
      setVolume(parseInt(target.value));

      if (audioElementRef.current?.volume != undefined) {
         audioElementRef.current.volume = volume / 100;
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
            {/* <span>{(parseInt(Math.floor(currentTime).toPrecision(2)) / 60) * 100}</span> */}
               <input
                  type="range"
                  className={styles.music_slider}
                  id="file"
                  value={currentTime}
                  min={0}
                  max={songDuration}
                  onChange={handleSeek}
               />
               {/* <span>{(parseInt(Math.floor(songDuration).toPrecision(2)) / 60) * 100}</span> */}
            </div>
         </div>
         <div className={styles.rightsection}>
            <div className={styles.volume}>
               <div className={styles.volume_control}>
                  {volume < 50 ? (
                     <FiVolume1
                        style={{ cursor: "poniter" }}
                        size={20}
                     ></FiVolume1>
                  ) : (
                     <FiVolume2
                        style={{ cursor: "poniter" }}
                        size={20}
                     ></FiVolume2>
                  )}
               </div>
               <input
                  className={styles.volume_slider}
                  type="range"
                  onChange={handleVolume}
                  value={volume}
                  min={0}
                  max={100}
               />
            </div>
         </div>
      </div>
   );
};

export default MusicPlayer;
