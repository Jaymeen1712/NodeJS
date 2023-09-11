module.exports = function createMessageFunction({ dataAccessMessageFunction, Joi, makeMessageTemplate }) {
    return async function messageFunction(textBody, htmlBody, subject, snippet, userId, messageId, threadId, inReplyTo, refrence, createdAt) {

        // console.log("\n\nadd-message.js use-case was called \n\n")

        isValid({ textBody, htmlBody, subject, snippet, userId, messageId, threadId, inReplyTo, refrence, createdAt });

        const ans = makeMessageTemplate({ textBody, htmlBody, subject, snippet, userId, messageId, threadId, inReplyTo, refrence, createdAt });
        // const entityId = ans.getId();
        // const entityName = ans.getName();
        const entityMessageTextBody = ans.getTextBody();
        const entityMessageHtmlBody = ans.getHtmlBody();
        const entityMessageSubject = ans.getSubject();
        const entityMessageSnippet = ans.getSnippet();
        const entityMessageUserId = ans.getUserId();
        const entityMessageMessageId = ans.getMessageId();
        const entityMessageThreadId = ans.getThreadId();
        const entityReplyTo = ans.getInReplyTo();
        const entityRefrence = ans.getRefrence();
        const entityCreatedAt = ans.getCreatedAt();

        const messageInfo = await dataAccessMessageFunction.createMessageDb({ entityMessageTextBody, entityMessageHtmlBody, entityMessageSubject, entityMessageSnippet, entityMessageUserId, entityMessageMessageId, entityMessageThreadId, entityReplyTo, entityRefrence, entityCreatedAt });

        return messageInfo;

        // JOI VALIDATION FUNCTION
        function isValid({ textBody, htmlBody, subject, snippet, userId, messageId, threadId, inReplyTo, refrence }) {

            console.log("\n\nadd-message.js use-case joi validation function was called \n\n")

            const schemass = Joi.object({
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
            const { value, error } = schemass.validate({
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
                const message = error.details[0].message;
                throw message;
            } else {
                return value;
            }
        }
    };
};
