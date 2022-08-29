import React from 'react';
import { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi';
import { MdOutlineDonutLarge } from 'react-icons/md';
import { BsFillChatLeftTextFill, BsSearch } from 'react-icons/bs';

import Style from './Sidebar.module.scss';
import SidebarChat from '../SidebarChat/SidebarChat';


const Sidebar = () => {
	const [menu, setMenu] = useState(false);
	return (
		<div className={`${Style.sidebar}`}>
			{/* sidebar header  */}
			<div className={`flex justify-between px-4 py-2`}>
				<div>

					<button className={`${Style.sidebar__btn_head} rounded-full`}>
						<img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="user" srcSet="" />
					</button>

				</div>
				<div className={`inline-flex relative `}>

					<button className={`${Style.sidebar__btn} rounded-full`}><MdOutlineDonutLarge /> </button>
					<button className={`${Style.sidebar__btn} rounded-full`}><BsFillChatLeftTextFill /></button>
					<button onClick={() => setMenu(!menu)} onBlur={() => setMenu(false)} className={`${Style.sidebar__btn} rounded-full`}><FiMoreVertical /> </button>
					<div className={`py-2 bg-white flex-col absolute top-full right-0 rounded-md overflow-hidden shadow-xl  ${menu ? 'flex' : 'hidden'} `}>
						<button className={` bg-white hover:bg-[#ebebeb] w-28 py-1`}>New Chat</button>
						<button className={` bg-white hover:bg-[#ebebeb] w-28 py-1`}>Settings</button>
						<button className={` bg-white hover:bg-[#ebebeb] w-28 py-1`}>Log Out</button>

					</div>


				</div>
			</div>

			{/* sidebar search  */}
			<div className={`${Style.sidebar__search}`}>
				<div className={`${Style.searchbar__container}`}>

					<span className='text-[gray] p-2'>  <BsSearch /></span>
					<input type="text" className="searchbar" placeholder="Search or Start new Chat" />
				</div>
			</div>

			{/* sidebar chats */}
			<div className={`${Style.sidebar__chat}`}>
				<SidebarChat name={"MD. Khairul Hasan Sajid"} massage={"Hey ! I am using whatsapp.."} />
				<SidebarChat name={"Badsha Faysal"} massage={"Hey ! I am using whatsapp.."} />
				<SidebarChat name={"Tahsin Haider"} massage={"Hey ! I am using whatsapp.."} />
				<SidebarChat name={"Ismail Hossain"} massage={"Hey ! I am using whatsapp.."} />
				<SidebarChat name={"Mehedi Hasan"} massage={"Hey ! I am using whatsapp.."} />

			</div>
		</div>
	);
}
export default Sidebar;