import songIcon from '../assets/song-default-icon.png'
import playerIcon from '../assets/player-icon.svg'
import deleteIcon from '../assets/delete-icon.svg'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';


const SongTable = () => {

    const context = useContext(DataContext);
    const { songs, setSongs, currentSong, setCurrentSong, setIsPlaying} = context;

    const handleDeleteSong = (songIndex) =>{
        const updatedSongs = songs.filter((_, index) => index !== songIndex)
        setSongs(updatedSongs)
    }

    const handleCurrentSong = (data) =>{
        setCurrentSong({
            audio: new Audio(data.link),
            name: data.name,
            image: data.image,
        })
        currentSong.audio.pause()
        setIsPlaying(false);
    }

  return (
    <div className="w-full border-t-[2px] mt-4">
        <table className="w-[97%] border-collapse border-l-8 border-r-8 border-white m-5 mx-auto mb-18">
            <thead>
                <tr className="border-b-[2px] font-roboto font-medium text-base leading-6 text-left text-black.85">
                    <th className="p-2 px-3">Song Name</th>
                    <th className="p-2 px-3">Source</th>
                    <th className="p-2 px-3">Added ON</th>
                </tr>
            </thead>
            <tbody>
            {songs.map((data,index)=>(
            <tr key={index} className="font-roboto font-normal text-base leading-6">
                <td className="flex items-center gap-2">
                    <img 
                        className="h-14 w-14" 
                        src={data.image ? URL.createObjectURL(data.image): songIcon} 
                        alt=""     
                    />
                    <h2>{data.name}</h2>
                </td>
                <td>{data.source}</td>
                <td>{data.time}</td>
                <td>
                    <img 
                        className="h-10 w-10 cursor-pointer" 
                        src={playerIcon} 
                        alt="" 
                        onClick={()=> handleCurrentSong(data)}
                    />
                </td>
                <td>
                    <img 
                        className="h-6 w-6 cursor-pointer" 
                        src={deleteIcon} 
                        alt="" 
                        onClick={()=> handleDeleteSong(index)}/>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default SongTable
