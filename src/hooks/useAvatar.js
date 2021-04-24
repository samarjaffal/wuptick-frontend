import {
    getFirstLetterFromString,
    getThreeLetterFromString,
} from '../shared/functions';
import { Colors } from '../assets/css/colors';

export const useAvatar = (user = {}) => {
    const name = user.name || '';
    const lastName = user.last_name || '';
    const initials =
        `${getFirstLetterFromString(name)}${getFirstLetterFromString(
            lastName
        )}` || null;

    const foregroundColor = Colors.white;
    const backgroundColor = user.color || Colors.primary;

    const size = 200;

    const initCanvas = (bgColor = null) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = size;
        canvas.height = size;

        // Draw background
        context.fillStyle = bgColor || backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw text
        context.font = 'bold 90px Hind Madurai';
        context.fillStyle = foregroundColor;
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        return { canvas, context };
    };

    const generateAvatar = (_text = null) => {
        let { canvas, context } = initCanvas();

        const text = initials ? initials : _text;

        context.fillText(text, canvas.width / 2, 110);

        return canvas.toDataURL('image/png');
    };

    const generateProjectAvatar = (project) => {
        let { canvas, context } = initCanvas(project.color);

        let projectName = project.name;

        let projectNameArray = projectName.split(' ');

        const haveManyWords = projectNameArray.length >= 2;

        const text = haveManyWords
            ? `${getFirstLetterFromString(
                  projectNameArray[0]
              )}${getFirstLetterFromString(projectNameArray[1])}`
            : getFirstLetterFromString(projectName);

        context.fillText(text, canvas.width / 2, 110);

        return canvas.toDataURL('image/png');
    };

    return {
        generateAvatar,
        generateProjectAvatar,
    };
};
