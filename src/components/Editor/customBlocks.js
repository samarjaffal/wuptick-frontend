export const customQuoteBlock = (block) => {
    return `<blockquote>${block.data.text}</blockquote>`;
};

export const customImageBlock = (block) => {
    return `<figure>
                <img src="${block.data.file.url}" alt="${block.data.caption}">
                <figcaption>${block.data.caption}</figcaption>
            <figure>`;
};
