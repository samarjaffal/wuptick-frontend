import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
    calendar: {
        sameElse: 'MMM D, h:mm A',
    },
});
