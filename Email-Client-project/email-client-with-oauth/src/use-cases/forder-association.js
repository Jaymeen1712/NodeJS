module.exports = function createFolderAssociationFunction({ fetchLableId, dataAccessFolderAssociation }) {
    return async function folderAssociationFunction({ labelIds, messageId }) {

        console.log("\n\n folder-association.js --usecase-- was called\n\n");

        for (let i = 0; i < labelIds.length; i++) {
            const labelId = await fetchLableId({ name: labelIds[i] });
            await dataAccessFolderAssociation.folderAssociation({ messageId, labelId });
        }
    }
}