import { config } from '../../config/index';
import { getAccessToken } from '../shared/GetAccessToken';
import { useUser } from '../hooks/useUser';
const URL = `${config.backUrl}upload_editor_image`;

const readImage = async (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
    });
};

export const uploadImageEditor = async (file, fileData) => {
    let base64EncondedImg = await readImage(file);

    return await fetch(URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data: base64EncondedImg,
            token: getAccessToken(),
            fileData: JSON.stringify(fileData),
        }),
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
