import ajax from '@codexteam/ajax';

/**
 * Module for file uploading.
 */
export default class Uploader {
    /**
     * @param {Object} config
     * @param {function} onUpload - callback for successful file upload
     * @param {function} onError - callback for uploading errors
     */
    constructor({ config, onUpload, onError }) {
        this.config = config;
        this.onUpload = onUpload;
        this.onError = onError;
    }

    /**
     * Handle clicks on the upload file button
     * @fires ajax.transport()
     * @param {function} onPreview - callback fired when preview is ready
     */
    uploadSelectedFile({ onPreview }) {
        ajax.transport({
            url: this.config.endpoint || '',
            accept: this.config.types || '*',
            data: this.config.additionalRequestData || {},
            headers: this.config.additionalRequestHeaders || {},
            beforeSend: () => onPreview(),
            fieldName: this.config.field || 'file',
        })
            .then((response) => {
                this.onUpload(response);
            })
            .catch((error) => {
                const message =
                    error && error.message
                        ? error.message
                        : this.config.errorMessage || 'File upload failed';

                this.onError(message);
            });
    }
}
