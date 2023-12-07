import songsIcon from '../assets/songs-icon.svg'
import logoutIcon from '../assets/logout-icon.svg'


const Sidebar = () => {
  return (
    <div className="w-[15.938rem] border-r border-solid border-[1px]">
      <div className="font-roboto font-bold text-3xl leading-10 text-center text-primary px-6 pt-4">
        Logo
      </div>
      <div className="my-7">
        <div className='flex gap-2 px-5 py-2 cursor-pointer hover:bg-daybreak-blue/1 hover:border-daybreak-blue/6 hover:border-r-[3px] hover:text-daybreak-blue/6'>
          <img src={songsIcon} alt='songs-icon'/>
          <span className='font-roboto font-normal text-lg leading-6'>Songs</span>
        </div>

        <div className='flex gap-2 px-5 py-2 absolute bottom-0 cursor-pointer'>
          <img src={logoutIcon} alt='logout-icon'/>
          <span className='font-roboto font-normal text-lg leading-6'>Logout</span>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
