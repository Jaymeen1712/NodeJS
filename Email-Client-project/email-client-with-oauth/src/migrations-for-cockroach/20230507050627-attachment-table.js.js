'use strict';

async function up({ context: queryInterface }) {
  await queryInterface.sequelize.query(`
    CREATE TABLE attachments (
      id uuid NOT NULL DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL,
      attachment_id VARCHAR(100000000) NOT NULL,
      path VARCHAR(100000) NOT NULL,
      type VARCHAR NOT NULL,
      size INTEGER NOT NULL,
      CONSTRAINT attachments_pkey PRIMARY KEY (id ASC),
      CONSTRAINT attachments_fkey FOREIGN KEY ("user_id") REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE,
      FAMILY unique_ids (id, user_id),
      FAMILY none_unique (path, type, size)
    )
    `)
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable("attachments");
}

module.exports = { up, down }
