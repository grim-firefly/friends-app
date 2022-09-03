import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Navigate, useLocation } from 'react-router-dom';
import SignIn from './../component/SignIn/SignIn';
const RequireAuth = ({ children }) => {
	const [user] = useAuthState(auth);
	const location = useLocation();
	if (!user) {
		// return <Navigate to='/signin' state={{from:location}} replace/>
		return <Navigate to='/signin' state={{from:location}} replace />
	}
	return children;
}
export default RequireAuth;