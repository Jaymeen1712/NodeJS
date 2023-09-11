module.exports = function buildMakeRecipientsTemplate({ Joi }) {
    return function makeRecipientsTemplate({ messageId, recipientsId, recipientsType }) {
        const schema = Joi.object({
            messageId: Joi.string(),
            recipientsId: Joi.string().optional().allow(''),
            recipientsType: Joi.string(),
        });
        const { value, error } = schema.validate(
            { messageId, recipientsId, recipientsType });
        if (error) {
            throw (error.details[0].message);
        }
        return Object.freeze({
            getMessageId: () => value.messageId,
            getRecipientsId: () => value.recipientsId,
            getRecipientsType: () => value.recipientsType,
        });
    };
}; 