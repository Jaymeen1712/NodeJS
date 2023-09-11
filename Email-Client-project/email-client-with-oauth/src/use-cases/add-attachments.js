module.exports = function createAddAttachmentfunction({ fetch, fs, dataAccessAttachmetsFunction, Joi, makeAttachmentTemplate }) {
    return async function addAttachmentfunction({ result, userData, messageId }) {

        // console.log("\n\nadd-attachments use-case was called \n\n")
        if ('attachments' in result) {
            const attachments = result.attachments;
            for (let data of attachments) {
                let attachmetnId = data.attachmentId;
                let path = `/home/ad.rapidops.com/mugish.beldar/Git-Repository/Mugish-Beldar/email-client-using-oauth/src/attachments-files/`;
                const pathWithFileName = path + data.filename;
                const parts = data.filename.split('.');
                const extension = parts[parts.length - 1];
                let type = extension;
                let size = data.size;
                let userId = userData.id;

                const attachMetsData = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userData.userEmail}/messages/${messageId}/attachments/${attachmetnId}?access_token=${userData.accessToken}`);
                const response = await attachMetsData.json();

                let attachmentData = response.data;
                attachmentData = attachmentData.replace(/-/g, "+")
                attachmentData = attachmentData.replace(/_/g, "/")

                const textstr = Buffer.from(attachmentData, 'base64').toString('binary')

                fs.writeFileSync(pathWithFileName, textstr, 'binary');
                
                isValid({ userId, attachmetnId, pathWithFileName, type, size });

                const ans = makeAttachmentTemplate({ userId, attachmetnId, pathWithFileName, type, size });

                const entityUserId = ans.getUserId();
                const entityAttachmentId = ans.getAttachmentId();
                const entityPathWithFileName = ans.getPathWithFileName();
                const entityType = ans.getType();
                const entitySize = ans.getSize();

                const lableInfo = await dataAccessAttachmetsFunction.attachmetsdb({ entityUserId, attachmetnId, entityPathWithFileName, entityType, entitySize });
                return lableInfo;

            };
        }
    }

    // JOI VALIDATION FUNCTION
    function isValid({ userId, attachmetnId, pathWithFileName, type, size }) {
        // console.log("\n\nadd-attachments use-case joi validation function was called \n\n")

        const schemass = Joi.object({
            userId: Joi.string().required(),
            attachmetnId: Joi.string().required(),
            pathWithFileName: Joi.string().required(),
            type: Joi.string().required(),
            size: Joi.number().required(),
        });
        const { value, error } = schemass.validate({ userId, attachmetnId, pathWithFileName, type, size });
        if (error) {
            const message = error.details[0].message;
            throw message;
        } else {
            return value;
        }
    }
}
