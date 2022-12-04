import Application from './application'
import User from './user'

User.hasMany(Application)
Application.belongsTo(User)

export { User, Application }
