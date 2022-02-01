import React, { useContext, useEffect } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import { AuthContext } from '../Firebase/context';
import firebase from 'firebase/compat/app';
import { Redirect } from 'react-router-dom';
import * as firebaseui from 'firebaseui';

export default function SignIn() {
	//get the user state from the context
	const { user } = useContext(AuthContext);
	console.log('user in sign in', user);

	useEffect(() => {
		//this is our config for FirebaseAuth
		const uiConfig = {
			signInOptions: [ firebase.auth.PhoneAuthProvider.PROVIDER_ID ],
			callbacks: {
				signInSuccess: () => false
			}
		};
		const ui = new firebaseui.auth.AuthUI(firebase.auth());
		// The start method will wait until the DOM is loaded.
		ui.start('#firebaseui-auth-container', uiConfig);
	}, []);

	//if user exists or signed in, we redirect the page to home, else display the sign in methods with FirebaseAuth
	return (
		<div>
			{!!user ? (
				<Redirect to={{ pathname: '/dashboard' }} />
			) : (
				<div>
					<p>Please Sign In</p>
					{/* <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
					<div id="firebaseui-auth-container" />
				</div>
			)}
		</div>
	);
}
