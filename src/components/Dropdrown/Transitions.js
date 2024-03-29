import { createGlobalStyle } from 'styled-components';

export const Transitions = createGlobalStyle`
:root {
    --speed: 500ms;
}

/* CSSTransition classes  */
.menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
}

.menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
}

.menu-primary-exit {
    position: absolute;
}

.menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
}

.menu-secondary-enter {
    transform: translateX(110%);
}

.menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
}

.menu-secondary-exit {}

.menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
}

`;
