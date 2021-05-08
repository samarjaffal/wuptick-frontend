import { Colors } from '../../assets/css/colors';

const fileExtColor = (ext) => {
    switch (ext) {
        case 'docx':
        case 'doc':
            return Colors.blue;

        case 'pdf':
            return Colors.red;

        case 'pptx':
            return Colors.orange;

        case 'csv':
        case 'xlsx':
            return Colors.green;

        default:
            return Colors.primary;
    }
};

const fileSize = (size) => {
    let sizePrefix, formattedSize;
    if (!size) return '';

    if (Math.log10(+size) >= 6) {
        sizePrefix = 'MiB';
        formattedSize = size / Math.pow(2, 20);
    } else {
        sizePrefix = 'KiB';
        formattedSize = size / Math.pow(2, 10);
    }

    return `${formattedSize.toFixed(1)} ${sizePrefix}`;
};

const FileIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40"><path d="M17 0l15 14V3v34a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h20-6zm0 2H3a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V14H17V2zm2 10h7.926L19 4.602V12z"></path></svg>';

export const customQuoteBlock = (block) => {
    return `<blockquote>${block.data.text}</blockquote>`;
};

export const customImageBlock = (block) => {
    return `<figure>
                <img src="${block.data.file.url}" alt="${block.data.caption}">
                <figcaption>${block.data.caption}</figcaption>
            <figure>`;
};

export const customFileBlock = (block) => {
    return `<div class="cdx-attaches cdx-attaches--with-file">
                <div class="cdx-attaches__file-icon" data-extension="${
                    block.data.file.extension
                }" style="color: ${fileExtColor(block.data.file.extension)};">
                ${FileIcon}
                </div>
                <div class="cdx-attaches__file-info"> 
                    <div class="cdx-attaches__title">${
                        block.data.file.name
                    }</div>
                    <div class="cdx-attaches__size" >${fileSize(
                        block.data.file.size
                    )}</div>
                </div>
            <a class="cdx-attaches__download-button" href="${
                block.data.file.url
            }" target="_blank" rel="nofollow noindex noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="17pt" height="17pt" viewBox="0 0 17 17">
                    <path d="M9.457 8.945V2.848A.959.959 0 0 0 8.5 1.89a.959.959 0 0 0-.957.957v6.097L4.488 5.891a.952.952 0 0 0-1.351 0 .952.952 0 0 0 0 1.351l4.687 4.688a.955.955 0 0 0 1.352 0l4.687-4.688a.952.952 0 0 0 0-1.351.952.952 0 0 0-1.351 0zM3.59 14.937h9.82a.953.953 0 0 0 .953-.957.952.952 0 0 0-.953-.953H3.59a.952.952 0 0 0-.953.953c0 .532.425.957.953.957zm0 0" fill-rule="evenodd">
                    </path>
                </svg>
            </a>
        </div>`;
};
