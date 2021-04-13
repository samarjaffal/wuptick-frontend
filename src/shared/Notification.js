import { store } from 'react-notifications-component';

export const Notification = () => {
    const duration = 4000;
    const animationIn = 'animate__fadeIn';
    const animationOut = 'animate__fadeOut';

    const customTitles = {
        success: 'Success!',
        error: 'Opps...',
        info: 'Wait!',
    };

    const customTypes = {
        success: 'w-success',
        error: 'w-error',
        info: 'w-info',
    };

    const notificationObj = {
        title: '',
        message: '',
        type: '',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', animationIn],
        animationOut: ['animate__animated', animationOut],
        dismiss: {
            showIcon: true,
            duration: duration,
        },
    };

    const addNotification = (title, msg, type) => {
        notificationObj.title = title;
        notificationObj.message = msg;
        notificationObj.type = type;
        return store.addNotification(notificationObj);
    };

    return {
        addNotification,
        customTypes,
        customTitles,
    };
};
