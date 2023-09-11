function createFolderAssociation({ cockroach }) {
    return {
        folderAssociation
    }
    async function folderAssociation({messageId, labelId}) {
        try {
            const sql = "INSERT INTO email_forlder_association (message_id, label_id) VALUES ($1, $2) returning id";
            const values = [messageId,labelId ];
            const result = await cockroach.query(sql, values);
        } catch (error) {
            return true;
        }
    }
}

module.exports = createFolderAssociation;