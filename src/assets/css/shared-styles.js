import { css } from 'styled-components';

export const Shadow = css`
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%); /* Firefox 3.5 - 3.6 */
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%); /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

export const ShadowSecondary = css`
    -webkit-box-shadow: 0px 2px 4px #d6d7e0; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 0px 2px 4px #d6d7e0; /* Firefox 3.5 - 3.6 */
    box-shadow: 0px 2px 4px #d6d7e0; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

export const Transition = css`
    opacity: 0.8;
    transition-duration: 0.5s;
    transition-property: all;
`;

export const TransitionSecondary = css`
    transition: all 0.5s ease 0s;
`;
