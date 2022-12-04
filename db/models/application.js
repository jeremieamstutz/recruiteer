import { DataTypes } from 'sequelize'
import sequelize from '../index'

const Application = sequelize.define('application', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		allowNull: false,
		defaultValue: sequelize.fn('gen_random_uuid'),
	},
	company: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	job: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	letter: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'pending',
	},
})

export default Application
