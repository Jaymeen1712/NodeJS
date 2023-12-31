module.exports = function messageFormaterFunction({ b64Decode }) {
    return  function messageFormater(response) {

        var result = {
            id: response.id,
            threadId: response.threadId,
            labelIds: response.labelIds,
            snippet: response.snippet,
            historyId: response.historyId
        };
        if (response.internalDate) {
            result.internalDate = parseInt(response.internalDate);
        }

        var payload = response.payload;
        if (!payload) {
            return result;
        }

        var headers = indexHeaders(payload.headers);
        result.headers = headers;

        var parts = [payload];
        var firstPartProcessed = false;

        while (parts.length !== 0) {
            var part = parts.shift();
            if (part.parts) {
                parts = parts.concat(part.parts);
            }
            if (firstPartProcessed) {
                headers = indexHeaders(part.headers);
            }

            if (!part.body) {
                continue;
            }

            var isHtml = part.mimeType && part.mimeType.indexOf('text/html') !== -1;
            var isPlain = part.mimeType && part.mimeType.indexOf('text/plain') !== -1;
            var isAttachment = Boolean(part.body.attachmentId || (headers['content-disposition'] && headers['content-disposition'].toLowerCase().indexOf('attachment') !== -1));
            var isInline = headers['content-disposition'] && headers['content-disposition'].toLowerCase().indexOf('inline') !== -1;

            if (isHtml && !isAttachment) {
                result.textHtml = urlB64Decode(part.body.data);
            } else if (isPlain && !isAttachment) {
                result.textPlain = urlB64Decode(part.body.data);
            } else if (isAttachment) {
                var body = part.body;
                if (!result.attachments) {
                    result.attachments = [];
                }
                result.attachments.push({
                    filename: part.filename,
                    mimeType: part.mimeType,
                    size: body.size,
                    attachmentId: body.attachmentId,
                    headers: indexHeaders(part.headers)
                });
            } else if (isInline) {
                var body = part.body;
                if (!result.inline) {
                    result.inline = [];
                }
                result.inline.push({
                    filename: part.filename,
                    mimeType: part.mimeType,
                    size: body.size,
                    attachmentId: body.attachmentId,
                    headers: indexHeaders(part.headers)
                });
            }
            firstPartProcessed = true;
        }
        return result;
        
    }

    function urlB64Decode(string) {
        return string
            ? decodeURIComponent(escape(b64Decode(string.replace(/\-/g, '+').replace(/\_/g, "/")))).replace(/[\r\n]+/g, "").replace(/[\t]+/g, "")
            : '';
    }

    function indexHeaders(headers) {
        if (!headers) {
            return {};
        } else {
            return headers.reduce(function (result, header) {
                result[header.name.toLowerCase()] = header.value;
                return result;
            }, {});
        }
    }
}