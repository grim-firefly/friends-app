import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Style from './Home.module.scss';
const Home = () => {
	return (
		<div className={`grid place-items-center`}>
			<div className={`${Style.app__body} flex`}>
				{/* sidebar  */}
				<Sidebar />
				<Chat />
				{/* <Routes>
					<Route path='/' element={<Chat />} >
						<Route path='rooms/:roomId' element={<Chat />} />
					</Route>

					{/* chat  */}

				{/* </Routes> */}
			</div>
		</div>
	);
}
export default Home;