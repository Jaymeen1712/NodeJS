function messageFunctions({ cockroach }) {
    return {
        createMessageDb,
        fetchMfessageIddb
    }
    async function createMessageDb({ entityMessageTextBody, entityMessageHtmlBody, entityMessageSubject, entityMessageSnippet, entityMessageUserId, entityMessageMessageId, entityMessageThreadId, entityReplyTo, entityRefrence, entityCreatedAt }) {
        try {
            const sql = "INSERT INTO message (text_body, html_body, subject, snippet, user_id, message_id, thread_id, in_reply_to, refrence, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning id";
            const values = [entityMessageTextBody, entityMessageHtmlBody, entityMessageSubject, entityMessageSnippet, entityMessageUserId, entityMessageMessageId, entityMessageThreadId, entityReplyTo, entityRefrence, entityCreatedAt];
            const result = await cockroach.query(sql, values);
            return result.rows[0].id;
        } catch (error) {
            // throw error;
            return true;
        }
    }

    async function fetchMfessageIddb({ entityLableName }) {
        const sql = `select * from lables where name = '${entityLableName}'`
        const result = await cockroach.query(sql);
        return result.rows[0].id;
    }
}

module.exports = messageFunctions;