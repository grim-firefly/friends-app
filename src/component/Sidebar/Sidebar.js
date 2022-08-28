import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi';
import { MdOutlineDonutLarge } from 'react-icons/md';
import { BsFillChatLeftTextFill, BsSearch } from 'react-icons/bs';

import Style from './Sidebar.module.scss';
import SidebarChat from '../SidebarChat/SidebarChat';
const Sidebar = () => {
	return (
		<div className={`${Style.sidebar}`}>
			{/* sidebar header  */}
			<div className={`flex justify-between px-4 py-2`}>
				<div>

					<button className={`${Style.sidebar__btn_head} rounded-full`}>
						<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" srcSet="" />
					</button>

				</div>
				<div className={`inline-flex `}>

					<button className={`${Style.sidebar__btn} rounded-full`}><MdOutlineDonutLarge /> </button>
					<button className={`${Style.sidebar__btn} rounded-full`}><BsFillChatLeftTextFill /></button>
					<button className={`${Style.sidebar__btn} rounded-full`}><FiMoreVertical /> </button>


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
				<SidebarChat/>
				<SidebarChat/>
				<SidebarChat/>
			</div>
		</div>
	);
}
export default Sidebar;