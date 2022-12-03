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
			const {
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

			// const query = `
			// Name: "${name}"
			// Title: "${title}"
			// Hard skills: "${hard_skills}"
			// Soft skills: "${soft_skills}"
			// Educations: "${educations}"
			// Past experiences: "${experiences}"
			// Personal projects: "${projects}"
			// Company to apply for: "${company}"
			// Job title: "${job}"
			// Job description: "${description}"
			// Write a cover letter in English with a professional tone.`
			// const query = `
			// Nom complet: "${name}"
			// Profession: "${title}"
			// Compétences: "${hard_skills}"
			// Savoir être: "${soft_skills}"
			// Formations: "${educations}"
			// Expériences: "${experiences}"
			// Projets: "${projects}"
			// Entreprise: "${company}"
			// Titre du poste: "${job}"
			// Description du poste: "${description}"
			// Ecris une lettre de motivation professionnelle.`
			const query = `
			Nom complet: "${name}"
			Compétences: "${hard_skills}"
			Savoir être: "${soft_skills}"
			Formations: "${educations}"
			Expériences: "${experiences}"
			Entreprise: "${company}"
			Titre du poste: "${job}"
			Ecris une lettre de motivation.`
			// const query = `My name is ${name} and I'm apply for a job at ${company} as a ${job} with a description of ${description}. Write a cover letter.`

			console.log(query)

			const response = await openai.createCompletion({
				model: 'text-davinci-003',
				prompt: query,
				presence_penalty: 1,
				frequency_penalty: 1,
				temperature: 0.7,
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
