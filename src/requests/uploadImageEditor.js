import { config } from '../../config/index';
import { getAccessToken } from '../shared/GetAccessToken';
const URL = `${config.backUrl}upload_editor_image`;

let FILE_NAME = '';

const readImage = async (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        FILE_NAME = file.name;
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
    });
};

export const uploadImageEditor = async (file, fileData) => {
    // let base64EncondedImg = await readImage(file);

    const formData = new FormData();

    formData.append('file', file);
    formData.append(
        'data',
        JSON.stringify({
            ...fileData,
            additional_params: JSON.stringify(fileData.additional_params),
            fileName: FILE_NAME,
        })
    );

    return await fetch(URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    })
        .then(async (response) => {
            const data = await response.json();
            return data;
        })
        .catch((error) => {
            console.log(error);
            return { success: 0, file: {} };
        });
};
