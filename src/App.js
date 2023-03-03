import React, { useState } from "react";

import "./App.css";

import aSmallMiracle from "./assets/a_small_miracle.mp3";
import powerfulBeat from "./assets/powerful_beat.mp3";
import risk from "./assets/risk.mp3";
import TrackList from "./components/TrackList";
import { PlayerControls } from "./components/PlayerControls";
import { MusicContext } from "./contexts/MusicContext";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "A Small Miracle...",
        file: aSmallMiracle,
      },

      {
        name: "Powerful Beat...",
        file: powerfulBeat,
      },

      {
        name: "Risk...",
        file: risk,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="wrapper">
        <h1>Music Player</h1>
        <div>
          <TrackList />
          <PlayerControls />
        </div>
      </div>
    </MusicContext.Provider>
  );
}

export default App;
