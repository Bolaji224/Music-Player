import { useContext } from "react";
import Display from "./Components/Display";
import Player from "./Components/Player";
import Sidebar from "./Components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {songsData.length !== 0 ? (
        <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      ) : null}

      {/* Only render audio element if track.file exists */}
      {track?.file && (
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      )}
    </div>
  );
};

export default App;

  );
};

export default App;
