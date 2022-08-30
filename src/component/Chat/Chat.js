import React from 'react';
import Style from './Chat.module.scss';
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { IoAttachOutline } from 'react-icons/io5';

const Chat = () => {
	return (
		<div className={`${Style.app__chat}`}>
			<div className={`${Style.chat__header}`}>
				<div className={`w-12`}>
					<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
				</div>
				<div className='ml-2 flex-1'>
					<h2 className='font-medium'>Room Name</h2>
					<p className='text-xs'>Last seen today at 10:30 PM </p>
				</div>
				<div className='flex justify-between'>
					<button className={`${Style.sidebar__btn} rounded-full`}><BsSearch /> </button>
					<button className={`${Style.sidebar__btn} rounded-full`}><IoAttachOutline /> </button>
					<button className={`${Style.sidebar__btn} rounded-full`}><BsThreeDotsVertical /> </button>


				</div>
			</div>
			<div className={`${Style.chat__body}`}>
				<div className={`${Style.chat__message}`}>
					<span className={`${Style.chat__name}`}>Tahsin Haider</span>
					<p>Hey Guys<span className={`${Style.chat__timestamp}`}>11:30 pm</span></p>
					
				</div>
				<div className={`${Style.chat__message} ${Style.chat__receiver}`}>
					<span className={`${Style.chat__name}`}>MD. Khaiurl Hasan Sajid</span>
					<p>Hey Guys<span className={`${Style.chat__timestamp}`}>11:30 pm</span></p>
					
				</div>
			</div>
		</div>
	);
}
export default Chat;