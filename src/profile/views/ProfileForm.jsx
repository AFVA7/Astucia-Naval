// ProfileForm.js
import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField, Typography, Alert } from "@mui/material";
import { updateProfile } from '../../store/auth';
import { fileUpload } from '../../helpers';

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const { displayName: currentDisplayName, email: currentEmail, photoURL: currentPhotoURL, errorMessage } = useSelector(state => state.auth);

  const [formState, setFormState] = useState({
    displayName: currentDisplayName || '',
    email: currentEmail || '',
    photoURL: currentPhotoURL || '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // validaciones 
  const isFormValid = useMemo(() => {
    return formState.displayName.trim() !== '' && formState.email.trim() !== '';
  }, [formState]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    // Dispatch de la acción de actualización del perfil
    dispatch(updateProfile(formState));
    // Restablecer el estado del formulario si es necesario
  };

  const handlePhotoUpload = async ({ target }) => {
    const file = target.files[0];
    if (file) {
      try {
        const photoURL = await fileUpload(file);
        console.log(photoURL);
        setFormState((prevFormState) => ({
          ...prevFormState,
          photoURL,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };


  return (
    <form onSubmit={onSubmit}>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre completo"
            type="text"
            placeholder="Tu nombre aquí"
            fullWidth
            name='displayName'
            value={formState.displayName}
            onChange={onInputChange}
            error={!!formSubmitted && formState.displayName.trim() === ''}
            helperText={formSubmitted && formState.displayName.trim() === '' && 'El nombre es obligatorio'}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@gmail.com"
            fullWidth
            name='email'
            value={formState.email}
            onChange={onInputChange}
            error={!!formSubmitted && formState.email.trim() === ''}
            helperText={formSubmitted && formState.email.trim() === '' && 'El correo debe de tener una @'}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <input
            accept="image/*"
            id="photo-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handlePhotoUpload}
          />
          <label htmlFor="photo-upload">
            <Button
              variant="contained"
              component="span"
              fullWidth
            >
              Upload Photo
            </Button>
          </label>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button
              variant='contained'
              fullWidth
              type='submit'
            >
              Guardar cambios
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid
            item
            xs={12}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity="error">
              {errorMessage}
            </Alert>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
