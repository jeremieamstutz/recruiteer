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
			let {
				company,
				values,
				title,
                responsabilities,
				requirements,
				degrees,
				salary,
				procedure,
			} = body

			console.log(body)

			const query = `
            Entreprise : "${company}"
            Valeur de l’entreprise : "${values}“
            Intitulé du poste : "${title}"
            Responsabilités du poste : "${responsabilities}"
            Compétences requises : "${requirements}"
            Diplômes : Formation supérieure & expérience : "${degrees}"
            Rémunération et avantages sociaux : "${salary}"
            Processus de candidature et d’entretien : "${procedure}"
            Rédigez une description de poste adaptée avec les parties suivantes: Valeur de l’entreprise, Description du poste, Compétence attendues, Conclusion
            `

			let response = await openai.createCompletion({
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
