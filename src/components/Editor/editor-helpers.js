export const urlify = (text) => {
    var urlRegex = /https?:\/\/(?![^" ]*(?:jpg|png|gif|jpeg|svg|pdf|docx|doc|txt|pptx|ppt|mp3|mp4|xls|html|htm|zip|rar|ai|psd|json|csv|download))[^" ]+/g;
    return text.replace(urlRegex, function (url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
};
