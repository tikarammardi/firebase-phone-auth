import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/context.js';
import app from '../Firebase/config';
import { Link } from 'react-router-dom';

export default function NavBarComponent() {
	//get the user state from context
	const { user } = useContext(AuthContext);

	return (
		<div className="account">
			{!!user ? (
				<div className="dropdown">
					<p>{`Welcome, ${user.displayName || user.phoneNumber}`}</p>
					<div className="dropdown-content">
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/contact">Contact</Link>
						<Link onClick={() => app.auth().signOut()}>Sign Out</Link>
					</div>
				</div>
			) : (
				<Link to="/signin">
					<button>SIGN IN / REGISTER</button>
				</Link>
			)}
		</div>
	);
}
