const Joi = require("joi");
const fetch = require("node-fetch");
const b64Decode = require("base-64").decode;
const fs = require("fs");
const nodemailer = require("nodemailer");
const path = require('path');
const mime = require('mime');
const cheerio = require('cheerio');

const {
  makeUserTemplate,
  makeLableTemplate,
  makeMessageTemplate,
  makeUpdatePageTokenTemplate,
  makeFetchLableIdTemplate,
  makeAttachmentTemplate,
  makeRecipientsTemplate,
} = require("../entities");

const {
  dataAccessUserFunction,
  dataAccessLableFunction,
  dataAccessMessageFunction,
  dataAccessAttachmetsFunction,
  dataAccessRecipientsFunctions,
  dataAccessFolderAssociation,
  cockroach,
} = require("../data-access");

const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

// lable
const addLableFunction = require("./add-lable");
const createLable = addLableFunction({
  dataAccessLableFunction,
  Joi,
  makeLableTemplate,
});

const getLableFunction = require("./get-lable");
const getLable = getLableFunction({ dataAccessLableFunction, Joi });

const deleteLableFunction = require("./delete-lable");
const deleteLable = deleteLableFunction({ dataAccessLableFunction, Joi });

const updateLableFunction = require("./update-lable");
const updateLable = updateLableFunction({
  dataAccessLableFunction,
  Joi,
  makeLableTemplate,
});

const createFetchLablePrioritywiseFunction = require("./fetch-lable-prioritywise");
const fetchLablePrioritywiseFunction = createFetchLablePrioritywiseFunction({
  dataAccessLableFunction,
});

const createUpdatePageToken = require("./update-pagetoken");
const updatePageToken = createUpdatePageToken({
  dataAccessLableFunction,
  Joi,
  makeUpdatePageTokenTemplate,
});

const creatFetchLableId = require("./fetch-lable-id");
const fetchLableId = creatFetchLableId({
  dataAccessLableFunction,
  Joi,
  makeFetchLableIdTemplate,
});

// user
const FetchAllUserDataFunc = require("./display-user");
const fetchAllUserData = FetchAllUserDataFunc({
  read: dataAccessUserFunction.read,
  getLable,
  Joi,
});

const createUserFunc = require("./create-user");
const createUser = createUserFunc({
  create: dataAccessUserFunction.create,
  createLable: dataAccessLableFunction.createLableDb,
  producer,
  Joi,
  makeUserTemplate,
});

const updateUserFunc = require("./update-user");
const updateUser = updateUserFunc({
  update: dataAccessUserFunction.update,
  Joi,
  makeUserTemplate,
});

const deleteUserFunc = require("./delete-user");
const deleteUser = deleteUserFunc({
  deletedb: dataAccessUserFunction.deletedb,
});

const paginateUsersFunction = require("./paginate-user");
const paginateUsers = paginateUsersFunction({
  paginateUsersdb: dataAccessUserFunction.paginateUsersdb,
  getLable,
  Joi,
});

// message
const createMessageFunction = require("./add-message");
const messageFunction = createMessageFunction({
  dataAccessMessageFunction,
  Joi,
  makeMessageTemplate,
});

// attachments
const createAddAttachmentfunction = require("./add-attachments");
const addAttachmentfunction = createAddAttachmentfunction({
  fetch,
  fs,
  dataAccessAttachmetsFunction,
  Joi,
  makeAttachmentTemplate,
});

//recipients
const createRecipientsFunctions = require("./add-recipients");
const recipientsFunctions = createRecipientsFunctions({
  dataAccessRecipientsFunctions,
  Joi,
  makeRecipientsTemplate,
});

// fetch-all-messages

const messageFormaterFunction = require("../handlers/message-formater");
const messageFormater = messageFormaterFunction({ b64Decode });

const createFolderAssociationFunction = require("./forder-association");
const folderAssociationFunction = createFolderAssociationFunction({
  fetchLableId,
  dataAccessFolderAssociation,
});

const createFetchLableMessage = require("./fetch-lable-messages");
const fetchLableMessage = createFetchLableMessage({
  kafka,
  fetch,
  messageFunction,
  recipientsFunctions,
  folderAssociationFunction,
  addAttachmentfunction,
  updatePageToken,
  messageFormater,
  fetchLablePrioritywiseFunction,
});

const createFetchMessages = require("./fetch-messages");
const fetchMessages = createFetchMessages({
  kafka,
  fetch,
  fetchLablePrioritywiseFunction,
  updatePageToken,
  fetchLableMessage,
});

const createUpdateAccessToken = require("./update-access-token");
const updateAccessToken = createUpdateAccessToken({
  dataAccessUserFunction,
  Joi,
});

const createFetchUserAccessToken = require("./fetch-user-access-token");
const fetchUserAccessToken = createFetchUserAccessToken({
  fetch,
  updateAccessToken,
  Joi,
});

const createFetchUsersExpireAccessToken = require("./fetch-users-expire-accesstoken");
const fetchUsersExpiresAccessToken = createFetchUsersExpireAccessToken({
  dataAccessUserFunction,
  fetchUserAccessToken,
  Joi,
});

const createSendMailUsingNodemailer = require("./send-mail-using-nodemailer");
const sendMailUsingNodemailer = createSendMailUsingNodemailer({
  nodemailer,
  Joi,
  dataAccessUserFunction
});

const createSendMailUsingGmailFetchRequrest = require('./send-mail-using-gmail-fetch-api');
const sendMailUsingGmailFetchRequest = createSendMailUsingGmailFetchRequrest({fetch, Joi, fs, mime, path, dataAccessUserFunction, cheerio});

module.exports = Object.freeze({
  // user
  fetchAllUserData,
  createUser,
  updateUser,
  deleteUser,
  paginateUsers,
  updateAccessToken,
  fetchUserAccessToken,
  fetchUsersExpiresAccessToken,

  //lable
  createLable,
  deleteLable,
  updateLable,
  getLable,
  fetchLablePrioritywiseFunction,
  updatePageToken,
  fetchLableId,

  // message
  messageFunction,

  // attachment
  addAttachmentfunction,

  // recipients
  recipientsFunctions,
  fetchMessages,

  // send mail
  sendMailUsingNodemailer,
  sendMailUsingGmailFetchRequest
});
