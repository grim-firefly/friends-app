import React from 'react';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
	const [user] = useAuthState(auth);
	const [signInWithGoogle] = useSignInWithGoogle(auth);
	const location = useLocation();
	const navigate = useNavigate();
	const dest = location.state?.from || '/';
	if (user) {
		navigate(dest);
	}
	
	return (
		<div className='flex justify-center'>
			<div   >
				<button onClick={() => signInWithGoogle()} className='mx-auto px-8 py-1  border-2 border-gray-400 rounded-lg mt-10 hover:bg-orange-500 hover:text-white '>Google</button>
			</div>
		</div>
	);
}
export default SignIn;