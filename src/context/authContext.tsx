import { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User } from 'firebase/auth';
import { auth } from '../config/firebase.config';

const AuthContext = createContext<any>(null);

const UserContextProvider: React.FC = ({ children }: any) => {

    const [user, setUser] = useState<any>(null);

    function signUp(email: string, password: string, name: string) {
        return createUserWithEmailAndPassword(auth, email, password).then(async(userCredentials) => {
            await updateUserProfile(userCredentials.user, name);
        });
    }

    function signIn(email: string, password: string, ) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function updateUserProfile(user: User, name: string){
        updateProfile((user), {
            displayName: name,
        })
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={{user, signUp, signIn, logout}} > {children}
        </AuthContext.Provider>
    )
}

export function useUserAuthentication() {
    return useContext(AuthContext);
}

export default UserContextProvider;