import Header from "./Header"
import SongPlayer from "./SongPlayer"
import SongTable from "./SongTable"

const Songs = () => {

  return (
    <div className="w-full relative h-screen">
      <Header/>
      <SongTable/>
      <SongPlayer />
    </div>
  )
}

export default Songs
