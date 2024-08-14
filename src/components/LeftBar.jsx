import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MINI_LOGO_URL } from "../assets/assest";
function LeftBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState('/'); 

  const handleClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img src={MINI_LOGO_URL} className="h-8 rounded-xl object-left overflow-visible" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        <div className={`cursor-pointer p-1 ${selectedItem === '/' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/')}>
          <RiHome5Fill />
        </div>
        <div className={`cursor-pointer  p-1 ${selectedItem === '/search' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/search')}>
          <RiUserSearchLine />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/mail' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/mail')}>
          <RiMailFill />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/send' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/send')}>
          <IoIosSend />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/stack' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/stack')}>
          <SiElasticstack />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/inbox' ? 'bg-gray-600  rounded-lg' : ''}`} onClick={() => handleClick('/inbox')}>
          <FaInbox />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/stacks' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/stacks')}>
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="text-white bg-green-500 p-2 rounded-full">
        SS
      </div>
    </div>
  );
}

export default LeftBar;
