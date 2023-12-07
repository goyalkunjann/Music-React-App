import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs"
import AddSongModal from "./AddSongModal";

const Header = () => {
    const [onOpen, setOnOpen] = useState(false);

    function onClose() {
        setOnOpen(false)
      }
    

  return (
    <div className="mx-12">
      <Breadcrumbs />
      <div className="flex justify-between">
          <h2 className="text-black.85 font-roboto font-medium text-2xl leading-7">Songs</h2>
          <button 
            className="bg-secondary font-roboto font-normal text-lg leading-6 text-center rounded-md px-5 py-2 shadow-btn"
            onClick={()=>setOnOpen(true)}>
            Add Songs
          </button>
      </div>
      <AddSongModal onOpen={onOpen} onClose={onClose} />
    </div>
  )
}

export default Header
