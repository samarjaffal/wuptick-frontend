import { Colors } from '../assets/css/colors';

export const setFirstLetterUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getFirstLetterFromString = (string) => {
    if (string == null || typeof string == 'undefined') return '';
    return string.charAt(0);
};

export const randomColor = () => {
    let tempColors = { ...Colors };

    let removeColors = [
        'white',
        'whitePrimary',
        'backgroud',
        'softGray',
        'hover',
        'black',
    ];
    removeColors.forEach((e) => delete tempColors[e]);
    var keys = Object.keys(Colors);
    const color = tempColors[keys[(keys.length * Math.random()) << 0]];
    return color;
};

export const fileNameFromUrl = (path) => {
    path = path.substring(path.lastIndexOf('/') + 1);
    return (path.match(/[^.]+(\.[^?#]+)?/) || [])[0];
};
