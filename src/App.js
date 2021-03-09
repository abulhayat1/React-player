//adding styles
import "./styles/app.scss";

//adding component
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//adding util
import data from "./util";
import { useState } from "react";

function App() {
  //state (adding songs)
  const [songs, setSongs] = useState(data());
  //now playing
  const [currentSong, setCurrentSong] = useState(songs[1]);
  //is playing
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
