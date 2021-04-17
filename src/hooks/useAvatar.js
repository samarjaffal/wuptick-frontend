import { getFirstLetterFromString } from '../shared/functions';
import { Colors } from '../assets/css/colors';

export const useAvatar = (user = {}) => {
    const name = user.name || '';
    const lastName = user.last_name || '';
    const initials = `${getFirstLetterFromString(
        name
    )}${getFirstLetterFromString(lastName)}`;

    const foregroundColor = Colors.white;
    const backgroundColor = user.color || Colors.primary;

    const size = 200;

    const generateAvatar = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = size;
        canvas.height = size;

        // Draw background
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw text
        context.font = 'bold 90px Hind Madurai';
        context.fillStyle = foregroundColor;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(initials, canvas.width / 2, 110);

        return canvas.toDataURL('image/png');
    };

    return {
        generateAvatar,
    };
};
