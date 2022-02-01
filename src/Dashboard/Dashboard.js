import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';

export default function Dashboard() {
	const { user } = useContext(AuthContext);

	return !!user ? <div>This is dashboard</div> : <Redirect path="/signin" />;
}
