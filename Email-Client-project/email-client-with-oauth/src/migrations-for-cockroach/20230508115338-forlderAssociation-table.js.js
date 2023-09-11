'use strict';

async function up({ context: queryInterface }) {
  await queryInterface.sequelize.query(`
    CREATE TABLE email_forlder_association (
      id uuid NOT NULL DEFAULT gen_random_uuid(),
      message_id VARCHAR(1000000000) NOT NULL,
      label_id VARCHAR(1000000000) NOT NULL
    )
    `)
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable("email_forlder_association");
}

module.exports = { up, down }
