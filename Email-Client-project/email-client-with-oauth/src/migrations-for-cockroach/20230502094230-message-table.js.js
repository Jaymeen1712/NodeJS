'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.sequelize.query(`
  CREATE TABLE message ( 
  id uuid NOT NULL DEFAULT gen_random_uuid(), 
  text_Body VARCHAR(10000000) NULL, 
  Html_body VARCHAR(1000000)  NULL,
  subject VARCHAR(20000) NULL, 
  snippet VARCHAR(30000) NULL, user_id uuid NOT NULL, 
  message_id VARCHAR NULL, 
  thread_id VARCHAR(1000) NOT NULL, 
  in_reply_to VARCHAR(100000) NULL, 
  refrence VARCHAR(100000) NULL, 
  created_at TIMESTAMPTZ NULL, 
  updated_at TIMESTAMPTZ NULL, 
  CONSTRAINT message_pkey PRIMARY KEY (id ASC), 
  CONSTRAINT "message_userId_fkey" FOREIGN KEY ("user_id") REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE, 
  UNIQUE INDEX "messages_messageId_key" ("message_id" ASC) )
  `
	)
}
async function down({ context: queryInterface }) {
  await queryInterface.dropTable("massege");
}

module.exports = { up, down }
// UNIQUE INDEX "messages_threadId_key" ("thread_id" ASC), 
