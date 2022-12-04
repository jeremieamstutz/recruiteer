import { DataTypes } from 'sequelize'
import sequelize from 'db'

const Letter = sequelize.define('letter', {
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
	text: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

export default Letter
