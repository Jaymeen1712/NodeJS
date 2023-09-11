function createRecipientsFunctions({ cockroach }) {
    return {
        recipientsFunctionsdb
    }
    async function recipientsFunctionsdb({ entityMessageId, entityRecipientsId, entityRecipientsType }) {
        try {
            const sql = "INSERT INTO recipients (message_id, recipients_id, recipients_type) VALUES ($1, $2, $3) returning id";
            const values = [ entityMessageId, entityRecipientsId, entityRecipientsType ];
            const result = await cockroach.query(sql, values);
        } catch (error) {
            // throw error;
            return true;
        }
    }
}

module.exports = createRecipientsFunctions;