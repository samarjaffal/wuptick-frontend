export const isElemOutOfViewport = (elem) => {
    // Get element's bounding
    var bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    var out = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom =
        bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight);
    out.right =
        bounding.right >
        (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;

    return out;
};

export const isElementVisible = ({ left, width }) =>
    left + width <= (window.innerWidth || document.documentElement.clientWidth);

export const isPositionOutOfViewport = (position) => {
    // Check if it's out of the viewport on each side
    var out = {};
    out.top = position.top < 0;
    out.left = position.left < 0;
    out.bottom =
        position.bottom >
        (window.innerHeight || document.documentElement.clientHeight);
    out.right =
        position.right >
        (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;
    return out;
};
