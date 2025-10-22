import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = ()=> {
        return signInWithEmailAndPassword()
    }
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        signOutUser
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;