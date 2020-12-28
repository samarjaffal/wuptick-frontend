import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import { borderRadius } from './theme';
import { Shadow } from './shared-styles';

export const DatePickerStyle = createGlobalStyle`

    .react-datepicker{
        font-family: 'Hind Madurai', sans-serif;
        border:none;
        border-radius:${borderRadius};
        ${Shadow};
    }

    .react-datepicker__month-container{
        font-family: 'Hind Madurai', sans-serif;
    }
    .react-datepicker__header{
        background-color: #fff;
        border-bottom: none;
    }

    .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header{
        color: ${Colors.black};
    }

    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name{
        color: ${Colors.black};
    }

    .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover{
        background-color: ${Colors.hover};
        border-radius: 20px;
    }

    .react-datepicker__day--selected{
        border-radius: 20px;
        background-color: ${Colors.primary};
        color: ${Colors.white};
    }

    .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected{
        border-radius: 20px;
        background-color: ${Colors.secondary};
        color: ${Colors.white};
    }

    .react-datepicker__navigation--next{
        border-left-color: ${Colors.gray};
    }

    .react-datepicker__navigation--next:focus{
        outline: none;
    }

    .react-datepicker__navigation--previous{
        border-right-color: ${Colors.gray};
    }

    .react-datepicker__navigation--previous:focus{
        outline: none;
    }

    .react-datepicker__navigation--previous:hover{
        border-right-color: ${Colors.secondary};
    }
    .react-datepicker__navigation--next:hover{
        border-left-color: ${Colors.secondary};
    }
    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before{
        border-bottom-color: ${Colors.hover};
    }
`;
