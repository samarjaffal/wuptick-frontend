import Uploader from './uploader';

import BaseAttachesToolBase from '@editorjs/attaches';

export default class AttachesTool extends BaseAttachesToolBase {
    /**
     * @param {AttachesToolData} data
     * @param {Object} config
     * @param {API} api
     */
    constructor({ data, config, api }) {
        super({ data: data, config: config, api: api });

        super.uploader = new Uploader({
            config: config,
            onUpload: (response) => super.onUpload(response),
            onError: (error) => super.uploadingFailed(error),
        });
    }
}
