import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState(null);
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    const foundAlbum = albumsData.find((item) => item._id === id);
    if (foundAlbum) {
      setAlbumData(foundAlbum);
    }
  }, [id, albumsData]);

  return albumData ? (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt={`${albumData.name} Album Cover`}
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 flex items-center">
            <img
              className="w-5 mr-1"
              src={assets.spotify_logo}
              alt="Spotify Logo"
            />
            <span>
              <b>Spotify</b> • 1,323,154 likes • <b>50 songs,</b> about 2hr 30
              min
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-2">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr />
      {songsData
        .filter((item) => item.album === albumData.name)
        .map((item, index) => (
          <div
            onClick={() => playWithId(item._id)}
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="flex items-center text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                className="w-10 mr-2 rounded-full"
                src={item.image}
                alt={`${item.name} Song Cover`}
              />
              <span>{item.name}</span>
            </p>
            <p className="text-[15px] truncate">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
    </>
  ) : null;
};

export default DisplayAlbum;
