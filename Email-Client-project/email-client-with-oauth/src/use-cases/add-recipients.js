module.exports = function createRecipientsFunctions({ dataAccessRecipientsFunctions, Joi, makeRecipientsTemplate }) {
    return async function recipientsFunctions({ result, messageId }) {

        console.log("\n\n add-recipients.js usecase was called \n\n");

        if ('from' in result.headers) {
            let recipientsId = emailExtract({ email: result.headers.from })
            let recipientsType = 'from';
            isValid({ messageId, recipientsId, recipientsType });
            await addRecipientsDataInTodb({ messageId, recipientsId, recipientsType })
        }
        if ('to' in result.headers) {
            const recipientsId = emailExtract({ email: result.headers.to })
            const recipientsType = 'to';
            isValid({ messageId, recipientsId, recipientsType });
            await addRecipientsDataInTodb({ messageId, recipientsId, recipientsType })
        }
        if ('cc' in result.headers) {
            const recipientsId = emailExtract({ email: result.headers.cc })
            const recipientsType = 'cc';
            isValid({ messageId, recipientsId, recipientsType });
            await addRecipientsDataInTodb({ messageId, recipientsId, recipientsType })
        }
        if ('bcc' in result.headers) {
            const recipientsId = emailExtract({ email: result.headers.bcc })
            const recipientsType = 'bcc';
            isValid({ messageId, recipientsId, recipientsType });
            await addRecipientsDataInTodb({ messageId, recipientsId, recipientsType })
        }

        // JOI VALIDATION FUNCTION
        function isValid({ messageId, recipientsId, recipientsType }) {

            console.log("\n\n add-recipients.js usecase joi validation function was called \n\n");

            const schemass = Joi.object({
                messageId: Joi.string(),
                recipientsId: Joi.string().optional().allow(''),
                recipientsType: Joi.string(),
            });
            const { value, error } = schemass.validate({ messageId, recipientsId, recipientsType });
            if (error) {
                const message = error.details[0].message;
                throw message;
            } else {
                return value;
            }
        }
    }

    async function addRecipientsDataInTodb({ messageId, recipientsId, recipientsType }) {

        console.log("\n\n add-recipients.js --usecase-- addRecipientsDataInTodb function called");

        const ans = makeRecipientsTemplate({ messageId, recipientsId, recipientsType });

        const entityMessageId = ans.getMessageId();
        const entityRecipientsId = ans.getRecipientsId();
        const entityRecipientsType = ans.getRecipientsType();

        const lableInfo = await dataAccessRecipientsFunctions.recipientsFunctionsdb({ entityMessageId, entityRecipientsId, entityRecipientsType });
        return lableInfo;
    }

    function emailExtract({ email }) {

        console.log("\n\n add-recipients --usecase-- emailExtract function called\n\n");

        const formattedEmail = email.split(">")[0].replace(/.*?</, "");
        return formattedEmail;
    }
}