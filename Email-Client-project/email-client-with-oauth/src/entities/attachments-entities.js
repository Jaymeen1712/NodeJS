module.exports = function buildMakeAttachmentTemplate({ Joi }) {
    return function makeAttachmentTemplate({
        userId, attachmetnId, pathWithFileName, type, size
    }) {
        const schema = Joi.object({
            userId: Joi.string().required(),
            attachmetnId: Joi.string().required(),
            pathWithFileName: Joi.string().required(),
            type: Joi.string().required(),
            size: Joi.number().required(),
        });
        const { value, error } = schema.validate({ userId, attachmetnId, pathWithFileName, type, size });
        if (error) {
            throw (error.details[0].message);
        }
        return Object.freeze({
            getUserId: () => value.userId,
            getAttachmentId: () => value.attachmentId,
            getPathWithFileName: () => value.pathWithFileName,
            getType: () => value.type,
            getSize: () => value.size,
        });
    };
};