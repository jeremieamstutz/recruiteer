import { Configuration, OpenAIApi } from 'openai'

import statusCodes from 'utils/statusCodes'

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
	const { method, body } = req

	switch (method) {
		case 'POST': {
			const { prompt } = body

			const response = await openai.createCompletion({
				model: 'text-davinci-003',
				prompt: prompt,
				temperature: 0,
				max_tokens: 1000,
			})

			console.log(response.data)

			return res.status(statusCodes.ok).json(response.data)
		}
		default:
			res.status(statusCodes.methodNotAllowed).end()
			break
	}
}
