import { useEffect, useMemo, useState } from 'react';
import { startLoadingFile } from '../store/auth';

export const useForm = (initialForm = {}, formValidatios = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setformValidation] = useState({});

    useEffect(() => {
        createValidators();

    }, [formState])

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onFileInputChange = async ({ target }) => {
        if (!target.files.length) return;

        try {
            const photoURL = await startLoadingFile(target.files[0]);
            // Actualizar el estado del formulario con la nueva URL
            setFormState(prevState => ({
                ...prevState,
                photoURL: photoURL,
            }));
        } catch (error) {
            console.error('Error al cargar el archivo:', error.message);
        }
    };

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidatios)) {
            const [fn, errorMessage] = formValidatios[formField];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setformValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onFileInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    }
}