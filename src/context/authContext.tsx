import { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User } from 'firebase/auth';
import { auth, database } from '../config/firebase.config';
import { ref, set, update } from "firebase/database";

const AuthContext = createContext<any>(null);

const UserContextProvider: React.FC = ({ children }: any) => {

    const [user, setUser] = useState<any>(null);

    function signUp(email: string, password: string, name: string) {
        return createUserWithEmailAndPassword(auth, email, password).then(async (userCredentials) => {
            await updateUserProfile(userCredentials.user, name);
            const uid = userCredentials.user.uid;
            storeUserDataInDB(uid, name, email);
            registerInWelcomeChannel(uid, name, email);
        });
    }

    function registerInWelcomeChannel(uid: string, name: string, email: string) {
        update(ref(database, 'channels/welcome/members/' + uid), {
            id: uid,
            name: name,
            email: email,
        })
    }

    function storeUserDataInDB(uid: string, name: string, email: string) {
        set(ref(database, 'users/' + uid), {
            name: name,
            email: email,
            createdOn: Date.now(),
        })
    }

    function signIn(email: string, password: string,) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function updateUserProfile(user: User, name: string) {
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
        <AuthContext.Provider value={{ user, signUp, signIn, logout }} > {children}
        </AuthContext.Provider>
    )
}

export function useUserAuthentication() {
    return useContext(AuthContext);
}

export default UserContextProvider;