import { config } from '../../config/index';
const URL = `${config.backUrl}upload_editor_image`;

const readImage = async (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
    });
};

export const uploadImageEditor = async (file) => {
    console.log(file, 'file');

    let base64EncondedImg = await readImage(file);
    console.log(base64EncondedImg, 'base64EncondedImg 2');

    fetch(URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: base64EncondedImg }),
    })
        .then(async (data) => {
            console.log(data);
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
};
