'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.sequelize.query(`
    CREATE TABLE lables (
      id UUID NOT NULL DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL,
      name VARCHAR(100) NOT NULL,
      syncedFolder_id VARCHAR(100) NOT NULL,
      "createdAt" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp():::TIMESTAMPTZ,
      "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp():::TIMESTAMPTZ ON UPDATE current_timestamp():::TIMESTAMPTZ,
      CONSTRAINT lables_pkey PRIMARY KEY (id ASC),
      CONSTRAINT "lables_userId_fkey" FOREIGN KEY ("user_id") REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE,
      FAMILY unique_ids (id, user_id),
      FAMILY none_unique (name, syncedFolder_id)
    )`
	)
}
async function down({ context: queryInterface }) {
  await queryInterface.dropTable("lables");
}

module.exports = { up, down }
