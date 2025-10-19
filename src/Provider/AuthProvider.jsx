import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useLocation } from 'react-router';
export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createuser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // const location = useLocation();
    // console.log(loading, user,);

    const addOthers = (obj) => {
        return updateProfile(auth.currentUser, obj);

    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubLogIn = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => { unsubscribe() }
    }, [])

    const authInfo = {
        user,
        setUser,
        createuser,
        logOut,
        logIn,
        loading,
        setLoading,
        addOthers,
        resetPassword,
        googleLogIn,
        gitHubLogIn,

    }

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;