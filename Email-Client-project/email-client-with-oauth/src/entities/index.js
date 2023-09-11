const Joi = require('joi');

const buildMakeUserTemplate = require('./user-entities');
const makeUserTemplate = buildMakeUserTemplate({ Joi });

const buildMakeLableTemplate = require('./lable-entitties');
const makeLableTemplate = buildMakeLableTemplate({ Joi });

const buildMakeMessageTemplate = require('./message-entities');
const makeMessageTemplate = buildMakeMessageTemplate({ Joi });

const buildMakeUpdatePageTokenTemplate = require('./update-pagetoken');
const makeUpdatePageTokenTemplate = buildMakeUpdatePageTokenTemplate({ Joi })

const buildMakeFetchLableIdTemplate = require('./make-fetch-lableId-entitties')
const makeFetchLableIdTemplate = buildMakeFetchLableIdTemplate({ Joi })

const buildMakeAttachmentTemplate = require('./attachments-entities');
const makeAttachmentTemplate = buildMakeAttachmentTemplate({ Joi })

const buildMakeRecipientsTemplate = require('./recipients-entities');
const makeRecipientsTemplate = buildMakeRecipientsTemplate({Joi})

module.exports = {
    makeUserTemplate,
    makeLableTemplate,
    makeMessageTemplate,
    makeUpdatePageTokenTemplate,
    makeFetchLableIdTemplate,
    makeAttachmentTemplate,
    makeRecipientsTemplate
};