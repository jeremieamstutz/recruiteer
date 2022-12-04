import { Application } from 'db/models'
import statusCodes from 'utils/statusCodes'

export default async function handler(req, res) {
	const { method, body } = req

	switch (method) {
		case 'GET': {
			const applications = await Application.findAll()
			return res.status(statusCodes.ok).json(applications)
		}
		case 'POST': {
			const application = body
			const savedApplication = await Application.create(application)
			return res.status(statusCodes.ok).json(savedApplication)
		}
		default:
			res.status(statusCodes.methodNotAllowed).end()
			break
	}
}
