import Sidebar from "../components/Sidebar"
import Songs from "../components/Songs"

const DashBoard = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Songs />
    </div>
  )
}

export default DashBoard
