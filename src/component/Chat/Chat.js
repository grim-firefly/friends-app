import React, { useState, useEffect } from 'react';
// import from 'react';
import Style from './Chat.module.scss';
import { BsSearch, BsThreeDotsVertical, BsEmojiHeartEyes, BsMic } from 'react-icons/bs';
import { IoAttachOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import db, { auth } from '../../firebase';
import { collection, getDocs, doc, addDoc, onSnapshot, serverTimestamp, orderBy, query } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
const Chat = () => {
	const [input, setInput] = useState('');
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState('');
	const [message, setMessage] = useState([]);
	const connRef = collection(db, 'rooms');
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (roomId) {
			const getRoomName = async () => {
				onSnapshot(doc(connRef, roomId), (snapshot) => {
					setRoomName(snapshot.data().name);
				});
			}


			const getMessages = async () => {
				const qq = query(collection(connRef, roomId, 'messages'), orderBy('timestamp', 'asc'));
				onSnapshot(qq, (snapshot) => {
					setMessage(snapshot.docs.map((doc) => doc.data()));
				});
			}
			getRoomName();
			getMessages();



		}

	}, [roomId]);



	const sendMessage = (e) => {
		e.preventDefault();
		if (roomId) {
			const addMessage = async () => {
				await addDoc(collection(connRef, roomId, 'messages'), {
					message: input,
					name: user.displayName,
					timestamp: serverTimestamp()
				});
			}
			addMessage();
		}
		setInput('');
	}

	return (
		< div className={`${Style.app__chat}`
		}>
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
				{
					message.map((msg) => (
						<div className={`${Style.chat__message} ${msg.name == user.displayName ? Style.chat__receiver : ''} `}>
							{
								msg.name == user.displayName ?
									'' : <span className={`${Style.chat__name}`}>{msg.name}</span>

							}

							<p>{msg.message}<span className={`${Style.chat__timestamp}`}>{new Date(msg.timestamp * 1000).toUTCString()}</span></p>
						</div>


					))
				}



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
		</ div>
	);
}
export default Chat;