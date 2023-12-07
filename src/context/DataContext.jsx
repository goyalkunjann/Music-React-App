/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { songsData } from '../Data';
import defaultSong from '../assets/song2.mp3'; // Replace 'your-song.mp3' with your actual song file
import songIcon from '../assets/song-default-icon.png'


const DataContext = createContext();

const DataProvider = ({ children }) => {


    const [songs, setSongs] = useState(songsData)

    const [currentSong, setCurrentSong] = useState({
        audio : new Audio(defaultSong),
        name: 'Chaff & Dust',
        image: songIcon
    })

    const [isPlaying, setIsPlaying] = useState(false);
   

  return (
    <DataContext.Provider value={{songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };