module.exports = function buildMakeMessageTemplate({ Joi }) {
    return function makeMessageTemplate({
        id,
        textBody,
        htmlBody,
        subject,
        snippet,
        userId,
        messageId,
        threadId,
        inReplyTo,
        refrence,
        createdAt
    }) {
        const schema = Joi.object({
            id: Joi.string().optional(),
            textBody: Joi.string().optional(),
            htmlBody: Joi.string().optional(),
            subject: Joi.string().min(0).optional(),
            snippet: Joi.string().min(0).optional(),
            userId: Joi.string().optional(),
            messageId: Joi.string().optional(),
            threadId: Joi.string().optional(),
            inReplyTo: Joi.string().optional(),
            refrence: Joi.string().optional(),
            createdAt: Joi.string().optional(),

        });
        const { value, error } = schema.validate({
            id,
            textBody,
            htmlBody,
            subject,
            snippet,
            userId,
            messageId,
            threadId,
            inReplyTo,
            refrence,
            createdAt
        });
        if (error) {
            throw (error.details[0].message);
        }
        return Object.freeze({
            getId:()=> value.id,
            getTextBody: () => value.textBody,
            getHtmlBody : () => value.htmlBody,
            getSubject : () => value.subject,
            getSnippet : () => value.snippet,
            getUserId : () => value.userId,
            getMessageId: () => value.messageId,
            getThreadId : () => value.threadId,
            getInReplyTo : () => value.inReplyTo,
            getRefrence : () => value.refrence,
            getCreatedAt : () => value.createdAt
        });
    };
};
