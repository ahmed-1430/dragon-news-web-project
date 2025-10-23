import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] =useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=> {
        setUserLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        signOutUser,
        loginUser,
        userLoading, 
        setUserLoading
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;