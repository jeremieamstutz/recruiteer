import { Application } from 'db/models'
import statusCodes from 'utils/statusCodes'

export default async function handler(req, res) {
	const {
		method,
		query: { id },
	} = req

	switch (method) {
		case 'DELETE': {
			await Application.destroy({ where: { id } })

			return res.status(statusCodes.ok).end()
		}
		default:
			res.status(statusCodes.methodNotAllowed).end()
			break
	}
}
