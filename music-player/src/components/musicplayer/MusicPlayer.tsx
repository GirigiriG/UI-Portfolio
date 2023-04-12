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
import { BsVolumeMute } from "react-icons/bs";

const MusicPlayer = () => {
   const [isPlaying, setIsPlaying] = useState<Boolean>(true);
   const [tracks, _] = useState([
      "Saucy_dog.mp3",
      "evening.mp3",
      "night-sky.mp3",
      "Salyu.mp3",
      "abandoned_house.mp3",
   ]);
   const [trackIndex, setTrackIndex] = useState<number>(0);
   const [currentTime, setCurrentTime] = useState<number>(0);
   const [volume, setVolume] = useState<number>(20);
   const [songDuration, setSongDuration] = useState<any>(0);
   const [repeatColor, setRepeatColor] = useState("a0a0a0");
   const [songStartTime, setSongStartTime] = useState<string>("");
   const [SongEndTime, setSongEndTime] = useState<String>("");

   const audioElementRef = useRef<HTMLAudioElement>(null);

   audioElementRef.current?.addEventListener("loadedmetadata", () => {
      setSongDuration(audioElementRef.current?.duration);
      calculateSongDuration();
   });

   audioElementRef.current?.addEventListener("timeupdate", (event) => {
      calculatePlaytime();
   });

   const calculatePlaytime = () => {
      let seconds: number = 0;
      let minutes: number = 0;

      if (audioElementRef.current?.currentTime != undefined) {
         seconds = audioElementRef.current.currentTime % 60;
         minutes = (audioElementRef.current.currentTime / 60) % 60;

         if (seconds < 10) {
            setSongStartTime(`${Math.trunc(minutes)}:0${Math.trunc(seconds)}`);
            return;
         }
         setSongStartTime(`${Math.trunc(minutes)}:${Math.trunc(seconds + 1)}`);
      }
   };

   const calculateSongDuration = () => {
      if (audioElementRef.current?.duration != undefined) {
         const duration = audioElementRef.current.duration;
         const durationMinute: number = Math.floor(duration / 60);
         const durationSecond: number = Math.floor(
            duration - durationMinute * 60
         );

         setSongEndTime(`${durationMinute}:${durationSecond}`);
      }
   };

   const handleIsPlaying = () => {
      setSongDuration(audioElementRef.current?.duration);
      calculateSongDuration();


      isPlaying === true
         ? audioElementRef.current?.play()
         : audioElementRef.current?.pause();
      setIsPlaying(!isPlaying);
      setAudioTime();
   };

   const setAudioTime = () => {
      setInterval(() => {
         if (audioElementRef.current?.currentTime != undefined) {
            setCurrentTime(audioElementRef.current.currentTime);
         }
      }, 100);
   };

   const handleNextTrack = () => {
      const currentIndex = trackIndex == tracks.length - 1 ? 0 : trackIndex + 1;
      setTrackIndex(currentIndex);
      setIsPlaying(false);

      handlePlayPromise();
   };

   const handlePreviousTrack = () => {
      const currentIndex = trackIndex == tracks.length - 1 ? 0 : trackIndex - 1;
      setIsPlaying(false);

      if (currentIndex <= -1) {
         setTrackIndex(tracks.length - 1);
         setAudioTime();
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

   const handlePlayPromise = async () => {
      await audioElementRef.current?.play();

      try {
         // audioElementRef.current?.pause();
         if (audioElementRef.current?.currentTime != undefined) {
            audioElementRef.current?.play();
         }
      } catch (error) {
         console.error("Error occured ", error);
      }
   };

   const handleSeek = (event: React.ChangeEvent) => {
      let target = event.target as HTMLInputElement;
      setCurrentTime(parseInt(target.value));

      if (audioElementRef.current?.currentTime != undefined) {
         audioElementRef.current.currentTime = parseInt(target.value);
      }
   };

   const handleVolume = (event: React.ChangeEvent) => {
      let target = event.target as HTMLInputElement;
      setVolume(parseInt(target.value));

      if (
         parseInt(target.value) === 0 &&
         audioElementRef.current?.muted != undefined
      ) {
         audioElementRef.current.muted = true;
         return;
      }

      if (audioElementRef.current?.volume != undefined) {
         audioElementRef.current.muted = false;
         audioElementRef.current.volume = volume / 100;
      }
   };

   const handleSpaceKeyPress = (event: React.KeyboardEvent<Element>) => {
      if (event.keyCode === 32) {
         handleIsPlaying();
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
                        style={{ cursor: "poniter", marginLeft: "2px" }}
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
               <span>{songStartTime}</span>
               {/* <h2>{songDuration}</h2> */}
               <input
                  type="range"
                  className={styles.music_slider}
                  id="file"
                  value={currentTime}
                  min={0}
                  max={songDuration}
                  onKeyDown={handleSpaceKeyPress}
                  onChange={handleSeek}
               />
               {/* <h2>{currentTime}</h2> */}
               <span>{SongEndTime}</span>
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
