import { DataTypes } from 'sequelize'
import sequelize from '../index'

const User = sequelize.define('user', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		allowNull: false,
		defaultValue: sequelize.fn('gen_random_uuid'),
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING,
	},
	hard_skills: {
		type: DataTypes.ARRAY(DataTypes.STRING),
	},
	soft_skills: {
		type: DataTypes.ARRAY(DataTypes.STRING),
	},
	goals: {
		type: DataTypes.STRING,
	},
	experiences: {
		type: DataTypes.STRING,
	},
	educations: {
		type: DataTypes.STRING,
	},
	projects: {
		type: DataTypes.STRING,
	},
})

export default User
