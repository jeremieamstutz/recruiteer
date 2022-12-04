import { User } from 'db/models'
import statusCodes from 'utils/statusCodes'

export default async function handler(req, res) {
	const { method, body } = req

	switch (method) {
		case 'GET': {
			const users = await User.findAll()
			return res.status(statusCodes.ok).json(users)
		}
		case 'POST': {
			const user = body
			const savedUser = await User.create(user)
			return res.status(statusCodes.ok).json(savedUser)
		}
		default:
			res.status(statusCodes.methodNotAllowed).end()
			break
	}
}
