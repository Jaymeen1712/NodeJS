const Joi = require('joi');

const buildMakeUserTemplate = require('./user-entities');
const makeUserTemplate = buildMakeUserTemplate({ Joi });

const buildMakeLableTemplate = require('./lable-entitties');
const makeLableTemplate = buildMakeLableTemplate({ Joi });

module.exports = {
    makeUserTemplate,
    makeLableTemplate
};