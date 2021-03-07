//adding styles
import "./styles/app.scss";

//adding component
import Player from "./components/Player";
import Song from "./components/Song";

//adding util
import data from "./util";
import { useState } from "react";

function App() {
  //state (adding songs)
  const [songs, setSongs] = useState(data());
  //now playing
  const [currentSong, setCurrentSong] = useState(songs[3]);
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
