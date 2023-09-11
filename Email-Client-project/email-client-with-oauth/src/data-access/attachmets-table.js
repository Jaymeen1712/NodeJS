function createAttachmentFunctions({ cockroach }) {
    return {
        attachmetsdb
    }
    async function attachmetsdb({ entityUserId, attachmetnId, entityPathWithFileName, entityType, entitySize }) {
        try {
            console.log("attachmentsdb is calle din attachments-table.js",entityUserId, attachmetnId, entityPathWithFileName, entityType, entitySize )
            const sql = "INSERT INTO attachments (user_id, attachment_id, path, type, size) VALUES ($1, $2, $3, $4, $5) returning id";
            const values = [entityUserId, attachmetnId, entityPathWithFileName, entityType, entitySize];
            const result = await cockroach.query(sql, values);
            // console.log(result,"!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
        } catch (error) {
            throw error;
            // return true;
        }
    }
}

module.exports = createAttachmentFunctions;