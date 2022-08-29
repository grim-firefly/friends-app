import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';

import Style from './Home.module.scss';
const Home = () => {
	return (
		<div className={`grid place-items-center`}>
			<div className={`${Style.app__body} flex`}>
				{/* sidebar  */}
				<Sidebar/>
				{/* chat  */}
				<Chat/>
			</div>
		</div>
	);
}
export default Home;