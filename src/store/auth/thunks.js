import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { fileUpload } from "../../helpers"
import { checkingCredentials, login, logout, setPhotoURL } from "./"

export const chekingAuthentications = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}
export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
    }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName, photoURL, birthdate }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName, photoURL, birthdate });
        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, photoURL, email, displayName, birthdate }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}

export const startLoadingFile = async (file = '') => {
    try {
        const photoURL = await fileUpload(file);
        return photoURL;
    } catch (error) {
        console.error('Error al cargar el archivo:', error.message);
        throw error;
    }
}
