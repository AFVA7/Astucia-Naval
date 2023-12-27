import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            //user info
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}


export const registerUserWithEmailPassword = async ({ email, password, displayName, photoURL }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName, photoURL });
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: 'El correo ya esta registrado'
        }
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: 'credenciales incorrectas'
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
} 