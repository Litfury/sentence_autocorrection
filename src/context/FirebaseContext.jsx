import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_Firebase_API_key,
    authDomain: "sentencecorrector-e8cd4.firebaseapp.com",
    projectId: "sentencecorrector-e8cd4",
    storageBucket: "sentencecorrector-e8cd4.firebasestorage.app",
    messagingSenderId: "664438901821",
    appId: "1:664438901821:web:f8809cba832af862736e54",
    measurementId: "G-NK2Z0KJVKF"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const firebaseContext = createContext(null);

export const useFirebaseContext = () => useContext(firebaseContext);

export const FirbaseProvider = (props) => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        
    }, [user]);

    const SignUpwithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const SignInwithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const logout = () => {
        return signOut(auth).then(() => {
            console.log("Signed Out from logout button");
            navigate('/login');
            
            // Sign-out successful.
        }).catch((error) => {
            console.log(error);
            
            // An error happened.   
        });
    }


    const GoogleAuthentication = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/');
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }



    return <firebaseContext.Provider value={{ SignUpwithPassword, SignInwithPassword, GoogleAuthentication, user, setUser, logout }}>
        {props.children}
    </firebaseContext.Provider>
}