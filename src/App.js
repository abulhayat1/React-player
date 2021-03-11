//adding component
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//adding util
import data from "./util";
import { useState, useRef } from "react";
import "./styles/app.scss";

function App() {
  //ref
  const audioRef = useRef(null);

  //state (adding songs)
  const [songs, setSongs] = useState(data());
  //now playing
  const [currentSong, setCurrentSong] = useState(songs[0]);
  //is playing
  const [isPlaying, setIsPlaying] = useState(false);

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  //handler
  const timeUpdateHandler = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
