import { Configuration, OpenAIApi } from 'openai'
import { scrapeJobDescription } from 'utils/scraper'

import statusCodes from 'utils/statusCodes'

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
	const { method, body } = req

	switch (method) {
		case 'POST': {
			let {
				name,
				title,
				hard_skills,
				soft_skills,
				goals,
				experiences,
				educations,
				projects,
				company,
				job,
				description,
			} = body

			let response = await openai.createCompletion({
				model: 'text-davinci-003',
				prompt: `Résume le texte en trois phrases.
				${description}`,
				presence_penalty: 1,
				frequency_penalty: 1,
				temperature: 0.7,
				max_tokens: 1000,
			})

			description = response.data

			console.log(description)

			const query = `
			Nom complet: "${name}"
			Compétences: "${hard_skills}"
			Savoir être: "${soft_skills}"
			Formations: "${educations}"
			Expériences: "${experiences}"
			Entreprise: "${company}"
			Description: ${description}
			Titre du poste: "${job}"
			Ecris une lettre de motivation.`

			response = await openai.createCompletion({
				model: 'text-davinci-003',
				prompt: query,
				presence_penalty: 1,
				frequency_penalty: 1,
				temperature: 0.7,
				max_tokens: 3000,
			})

			console.log(response.data)

			return res.status(statusCodes.ok).json(response.data)
		}
		default:
			res.status(statusCodes.methodNotAllowed).end()
			break
	}
}
