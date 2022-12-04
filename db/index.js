import pg from 'pg'
import { Sequelize } from 'sequelize'

let sequelize

if (!sequelize) {
	sequelize = new Sequelize(
		'postgres://jamstutz:Jeremie1@localhost:5432/recruiteer',
		{ logging: false },
	)
	sequelize.sync()
}

export default sequelize
