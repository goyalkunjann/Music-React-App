/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from 'react'
import closeIcon from '../assets/close.svg'
import uploadIcon from '../assets/upload-icon.svg'
import uploadDefault from '../assets/song-default-icon.png'
import deleteIcon from '../assets/delete-icon.svg'
import { DataContext } from '../context/DataContext'


const AddSongModal = ({ onOpen, onClose }) => {

    const context = useContext(DataContext);
    const { songs, setSongs } = context;

    const [data, setData] = useState({
        name: '',
        link: '',
        source: ''
        })

    const [selectedFile, setSelectedFile] = useState(null);
    
    const modalRef = useRef(null);

    useEffect(() => {
        if (onOpen) {
            modalRef.current.showModal(); 
        } else {
            modalRef.current.close();
        }
    }, [onOpen]);

    const closeDialog = (e) => {
        e?.preventDefault();
        modalRef.current.close();
        onClose();
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const currentDate = new Date().toLocaleDateString('en-GB');

        const newSongData = {
          name: data.name,
          link: data.link,
          source: data.source,
          time:  currentDate,
          image: selectedFile,
      };

        setSongs([...songs, newSongData]);
        setData({
          name: '',
          link: '',
          source: ''
          })

        closeDialog();
    };

    const handleImageUpload = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    const handleDeleteImage  = () =>{
      setSelectedFile(null);
    }


    
  return (
    <dialog ref={modalRef} className='w-[45rem] outline-none shadow-modal' >
      <div className='flex justify-between items-center p-4 border-b-2'>
          <h1 className='font-roboto font-bold text-16 leading-6'>Add Song</h1>
          <img className="h-4 w-4 cursor-pointer" src={closeIcon} alt=""  onClick={closeDialog} />
      </div>
      <form onSubmit={submitHandler}>
        <div className='w-[90%] flex flex-col mx-auto mt-6'>

          <div className='formItem'>
            <label htmlFor="song_name">
              Song Name
            </label>
            <input
              type="text"
              id="song_name"
              value={data.name} 
              onChange={e => setData({ ...data, name: e.target.value })}
              placeholder='Song Name'
            />
          </div>

          <div className='formItem'>
            <label htmlFor="song_link">
              Song link
            </label>
            <input
              type="text"
              id="song_link"
              value={data.link} 
              onChange={e => setData({ ...data, link: e.target.value })}
              placeholder='URL'
            />
          </div>

          <div className='formItem'>
            <label htmlFor="song_source">
              Song Source
            </label>
            <input
              type="text"
              id="song_source"
              value={data.source} 
              onChange={e => setData({ ...data, source: e.target.value })}
              placeholder='Source Name'
            />
          </div>
          

          <label className="flex gap-3 items-center border-[1.5px] px-2 py-[2px] w-fit cursor-pointer">
              <input type="file" onChange={handleImageUpload} />
              <img className="h-4 w-4 cursor-pointer" src={uploadIcon} alt="" />
              <span className='font-roboto font-normal text-base leading-6 text-center'>
                Click to Upload Profile Thumbnail
              </span>
          </label>


          <div className="flex items-center border-[1.5px] p-1 my-2 justify-between">
            <div className='flex gap-2 items-center'>
              <img 
                className="h-12 w-12" 
                src={ selectedFile ? URL.createObjectURL(selectedFile) : uploadDefault} 
                alt="" 
              />
              <h2 className='font-roboto font-normal text-base leading-6 text-daybreak-blue/6'>
                {selectedFile ? selectedFile.name : "xxx.png"}
              </h2>  
            </div>
              
            <img className="h-6 w-6 cursor-pointer" src={deleteIcon} alt="" onClick={handleDeleteImage} />
          </div>
            
          <p className='font-roboto font-normal text-base leading-6 text-black.45 py-5'>
            Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000 pixels
          </p>
                
        </div>
        
        
        <div className='flex justify-end border-t-2 py-2 gap-4 px-2'>
          <button 
            onClick={closeDialog}
            className='shadow-form-btn font-roboto font-normal text-base leading-6 text-center px-4 py-1 border-[1.5px]'>
              Cancel
            </button>
          <button 
            type="submit" 
            className='font-pingfang font-normal text-base leading-6 text-center border-[1.5px] px-4 py-1 bg-daybreak-blue/6 text-white'>
              Add
            </button>
        </div>
      
      </form>
    </dialog>
  )
}

export default AddSongModal
