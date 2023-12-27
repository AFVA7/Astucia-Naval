
export const fileUpload = async (file) => {
    if (!file) throw new Error('No se ha seleccionado un archivo');
    const cloudURL = 'https://api.cloudinary.com/v1_1/andres-valencia/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-mapas');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData,
        });

        if (!resp.ok) throw new Error('Error al subir la imagen');
        const cloudeResp = await resp.json();
        return cloudeResp.secure_url;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}
