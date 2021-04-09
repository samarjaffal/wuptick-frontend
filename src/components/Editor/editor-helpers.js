export const urlify = (text) => {
    var urlRegex = /https?:\/\/(?![^" ]*(?:jpg|png|gif|jpeg|svg))[^" ]+/g;
    return text.replace(urlRegex, function (url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
};
