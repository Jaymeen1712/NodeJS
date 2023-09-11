'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.sequelize.query(`
	CREATE TABLE users (
		id UUID NOT NULL DEFAULT gen_random_uuid(),
		user_name VARCHAR(32) NOT NULL,
		user_email VARCHAR(30) NOT NULL,
		access_token VARCHAR(100) NOT NULL,
		refresh_token VARCHAR(100) NOT NULL,
		photo VARCHAR(100) NOT NULL,
		"createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp():::TIMESTAMP,
		"updateddAt" TIMESTAMP NOT NULL DEFAULT current_timestamp():::TIMESTAMP ON UPDATE current_timestamp():::TIMESTAMP,
		CONSTRAINT users_pkey PRIMARY KEY (id ASC),
		UNIQUE INDEX users_user_email_key (user_email ASC),
		UNIQUE INDEX users_access_token_key (access_token ASC),
		UNIQUE INDEX users_refresh_token_key (refresh_token ASC)
	  )`
	)
}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('users');
}

module.exports = { up, down };
