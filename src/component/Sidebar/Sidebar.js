import React, { useEffect } from 'react';
import { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi';
import { MdOutlineDonutLarge } from 'react-icons/md';
import { BsFillChatLeftTextFill, BsSearch } from 'react-icons/bs';
import Style from './Sidebar.module.scss';
import SidebarChat from '../SidebarChat/SidebarChat';
//firebase
import db from '../../firebase';
import { collection, onSnapshot, doc, addDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
	const [menu, setMenu] = useState(false);
	const [addNew, setAddNew] = useState(false);
	const [rooms, setRooms] = useState([]);
	const [NewRoomName, setNewRoomName] = useState('');
	const connRef = collection(db, "rooms");
	const [user] = useAuthState(auth);
	useEffect(() => {
		const getRooms = async () => {
			onSnapshot(connRef, (snapshot) => {
				setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
			});
		};
		getRooms();
		


	}, []);

	const addNewRoom = (e) => {
		e.preventDefault();
		if (NewRoomName) {
			const addNewRoom = async () => {
				await addDoc(connRef, {
					name: NewRoomName
				});
			}
			addNewRoom();

		}
		setNewRoomName('');
		setAddNew(false);

	}

	return (
		<div className={`${Style.sidebar}`}>
			{/* sidebar header  */}
			<div className={`flex justify-between px-4 py-2`}>
				<div>

					<button className={`${Style.sidebar__btn_head} rounded-full`}>
						<img src={user.photoURL} alt="user" srcSet="" />
					</button>

				</div>
				<div className={`inline-flex relative `}>

					<button className={`${Style.sidebar__btn} rounded-full`}><MdOutlineDonutLarge /> </button>
					<button className={`${Style.sidebar__btn} rounded-full`} onClick={() => setAddNew(!addNew)}

					><BsFillChatLeftTextFill /></button>

					<div className={`bg-[#00a884] py-4 px-4 rounded-lg absolute   ${Style.addnew__room}  ${addNew ? 'block' : 'hidden'} `} id="addnewChat__container" >
						<form action="">
							<input value={NewRoomName} onChange={(e) => {
								setNewRoomName(e.target.value);
							}} className='  rounded-lg px-1 border-none outline-none py-1' type="text" placeholder='Add new Room' name="newChat" id="" />
							<button className='hidden' type="submit" onClick={addNewRoom} >add new</button>
						</form>
					</div>

					<button onClick={() => setMenu(!menu)} className={`${Style.sidebar__btn} rounded-full`}><FiMoreVertical /> </button>
					<div className={`py-2 bg-white flex-col absolute top-full right-0 rounded-md overflow-hidden shadow-xl  ${menu ? 'flex' : 'hidden'} `}>
						<button className={` bg-white hover:bg-[#ebebeb] w-28 py-1`}>New Group</button>
						<button className={` bg-white hover:bg-[#ebebeb] w-28 py-1`}>Settings</button>
						<button className={` bg-white hover:bg-[#ebebeb] w-28 py-1`} onClick={() => { signOut(auth) }} >Log Out</button>

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
				{
					rooms.map(room => (
						<SidebarChat key={room.id} id={room.id} name={room.data.name} message={"hey ! i'm using whatapp"} />
					))
				}


			</div>
		</div>
	);
}
export default Sidebar;