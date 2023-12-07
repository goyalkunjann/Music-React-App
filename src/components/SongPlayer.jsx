import previous from '../assets/previous.svg'
import pause from '../assets/pause.svg'
import play from '../assets/play.png'
import next from '../assets/next.svg'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext'
import songIcon from '../assets/song-default-icon.png'


const SongPlayer = () => {

  const context = useContext(DataContext);
  const { currentSong, isPlaying, setIsPlaying } = context;

  const {audio, name, image} = currentSong
  const [currentTime, setCurrentTime] = useState(0);
    
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audio.currentTime = newTime;

    const percentage = (newTime / audio.duration) * 100;
    document.documentElement.style.setProperty('--slider-percentage', `${parseInt(percentage)}%`);

  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      const percentage = (audio.currentTime / audio.duration) * 100;
      document.documentElement.style.setProperty('--slider-percentage', `${parseInt(percentage) + 1}%`);
    };
  
    audio.addEventListener('timeupdate', handleTimeUpdate);


  
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audio, setCurrentTime]);


  return (
    <div className="mt-10 absolute bottom-0 w-full">
      <input 
          id="progress" 
          className="w-full" 
          type="range" 
          value={currentTime}
          step="1" 
          min="0" 
          max={audio.duration || 100}
          onChange={handleProgressChange}            
      />
      <audio id="audio" src={audio}></audio>

      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-2 mt-[-5.5px]">
          <img 
            className="h-14 w-14" 
            src={image?.name ? URL.createObjectURL(image) : image ? image:  songIcon} 
            alt="" 
          />
          <h2 className='text-center font-roboto font-medium text-2xl leading-[21.97px]'>
            {name}
          </h2>
        </div>

        <div className='flex gap-4 p-4'>
          <img className="h-6 w-6" src={previous} alt="" />
          <img className="h-6 w-6" src={isPlaying ? pause : play } alt="" onClick={togglePlay} />
          <img className="h-6 w-6" src={next} alt="" />
        </div>

      </div>

    </div>
  )
}

export default SongPlayer
