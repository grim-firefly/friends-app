import React, { useState, useEffect } from 'react';
// import from 'react';
import Style from './Chat.module.scss';
import { BsSearch, BsThreeDotsVertical, BsEmojiHeartEyes, BsMic } from 'react-icons/bs';
import { IoAttachOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
const Chat = () => {
	const [input, setInput] = useState('');
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState('');
	const connRef = collection(db, 'rooms');
	useEffect(() => {
		if (roomId) {
			const getRoomName = async () => { 
				onSnapshot(doc(connRef, roomId), (snapshot) => {

					setRoomName(snapshot.data().name);
				});
			}
			getRoomName();
		}

	}, [roomId]);



	const sendMessage = (e) => {
		e.preventDefault();
		setInput('');
	}

	return (
		<div className={`${Style.app__chat}`}>
			<div className={`${Style.chat__header}`}>
				<div className={`w-12`}>
					<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
				</div>
				<div className='ml-2 flex-1'>
					<h2 className='font-medium'>{roomName}</h2>
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
				<div className={`${Style.chat__message}`}>
					<span className={`${Style.chat__name}`}>Tahsin Haider</span>
					<p>Hey Guys<span className={`${Style.chat__timestamp}`}>11:30 pm</span></p>

				</div>
				<div className={`${Style.chat__message}`}>
					<span className={`${Style.chat__name}`}>Tahsin Haider</span>
					<p>Hey Guys<span className={`${Style.chat__timestamp}`}>11:30 pm</span></p>

				</div>

			</div>
			<div className={`${Style.chat__footer}`}>
				<div className=''>
					<button className={`${Style.footer__emoji__btn}`} ><BsEmojiHeartEyes /></button>
				</div>
				<div className={`${Style.chat__massage__box}`}>
					<form action="" className={`${Style.send__message_form}`}>
						<input value={input} onChange={(e) => {
							setInput(e.target.value)
						}} className={`${Style.send__massage__input}`} type="text" placeholder="Type a message" />
						<button onClick={sendMessage} type="submit" className='hidden'>Send</button>
					</form>
				</div>
				<div>
					<button className={`${Style.footer__emoji__btn}`} ><BsMic /></button>

				</div>
			</div>
		</div>
	);
}
export default Chat;