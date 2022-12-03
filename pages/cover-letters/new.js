import { useState } from 'react'
import axios from 'axios'
import { Formik, Form, useFormikContext } from 'formik'

import { HARD_SKILLS, SOFT_SKILLS } from 'constants/skills'

import Layout from 'components/layout/layout'
import { Input, Select, Step, Stepper } from 'components/form'
import Button from 'components/ui/button'

import classes from 'styles/new-cover-letter.module.css'

// const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et sollicitudin magna, pulvinar eleifend mauris. Sed condimentum lectus lectus, laoreet aliquam elit interdum id. Donec efficitur blandit quam at pellentesque. Quisque ac magna lacus. Etiam et nisi bibendum, rhoncus lectus et, laoreet ipsum. Aliquam eros ligula, aliquam vitae aliquet sit amet, bibendum in mauris. Morbi a justo vel eros egestas consequat.

// Donec elementum libero feugiat neque semper malesuada. Sed egestas vehicula gravida. Nam varius felis eu orci bibendum vulputate. Mauris sodales tellus ante, eget gravida est posuere eget. Fusce pellentesque pharetra lorem nec convallis. Sed erat ante, porttitor in ultricies ac, venenatis sed ex. Nunc rutrum euismod nisl, eget mattis augue mollis eu. Nam vulputate, risus id convallis tempor, augue diam aliquet enim, at luctus nisi eros id ante. Mauris vitae aliquet enim. Phasellus eget leo sit amet dolor hendrerit suscipit quis eget enim. Praesent egestas pulvinar sem sit amet volutpat. Mauris nec vulputate augue. Fusce quis ligula ligula. Curabitur non neque faucibus, tincidunt nibh in, sodales enim. Nam a mi auctor, venenatis nisi id, convallis augue.`

const hard_skills = HARD_SKILLS.map((skill) => ({
	value: skill,
	label: skill,
}))

const soft_skills = SOFT_SKILLS.map((skill) => ({
	value: skill,
	label: skill,
}))

function PersonalInfoForm() {
	const { values, handleBlur, handleChange, setFieldValue } =
		useFormikContext()
	return (
		<>
			<Input
				label="Nom"
				type="text"
				name="name"
				value={values.name}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Profession"
				type="text"
				name="title"
				value={values.title}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Select
				label="Compétences"
				options={hard_skills}
				isMulti={true}
				name="hard_skills"
				defaultValue={hard_skills.find((option) =>
					values.hard_skills.includes(option.value),
				)}
				onChange={(options) =>
					setFieldValue(
						'hard_skills',
						options.map((option) => option.value),
					)
				}
				onBlur={handleBlur}
			/>
			<Select
				label="Savoir être"
				options={soft_skills}
				isMulti={true}
				name="soft_skills"
				defaultValue={soft_skills.find((option) =>
					values.soft_skills.includes(option.value),
				)}
				onChange={(options) =>
					setFieldValue(
						'soft_skills',
						options.map((option) => option.value),
					)
				}
				onBlur={handleBlur}
			/>
			<Input
				label="Objectifs"
				type="text"
				name="goals"
				value={values.goals}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Expériences"
				type="textarea"
				rows={4}
				name="experiences"
				value={values.experiences}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Formations"
				type="textarea"
				rows={4}
				name="educations"
				value={values.educations}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Projets"
				type="textarea"
				rows={4}
				name="projects"
				value={values.projects}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</>
	)
}

function CompanyInfoForm() {
	const { values, handleBlur, handleChange } = useFormikContext()
	return (
		<>
			<Input
				label="Entreprise"
				type="text"
				name="company"
				value={values.company}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Poste"
				type="text"
				name="job"
				value={values.job}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Description"
				type="textarea"
				rows={8}
				name="description"
				value={values.description}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</>
	)
}

export default function NewCoverLetterPage() {
	const [loading, setLoading] = useState(false)
	const [text, setText] = useState('')
	const [activeStep, setActiveStep] = useState(0)

	return (
		<Layout>
			<h1 style={{ margin: '0 0 1rem' }}>Lettre de motivation</h1>
			<div className={classes.container}>
				<div className={classes.input}>
					<div
						style={{
							padding: '1.5rem 1.5rem 1rem',
							borderBottom: '1px solid #eee',
						}}
					>
						<div
							style={{
								display: 'flex',
								background: '#f3f3f3',
								borderRadius: '0.5rem',
								overflow: 'hidden',
							}}
						>
							<span
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flex: 1,
									padding: '1rem',
									background: activeStep === 0 ? '#ddd' : '',
								}}
								onClick={() => setActiveStep(0)}
							>
								Personnel
							</span>
							<span
								style={{
									cursor: 'pointer',
									display: 'flex',
									justifyContent: 'center',
									flex: 1,
									padding: '1rem',
									background: activeStep === 1 ? '#ddd' : '',
								}}
								onClick={() => setActiveStep(1)}
							>
								Entreprise
							</span>
						</div>
					</div>
					<div className={classes.body}>
						<Formik
							initialValues={{
								name: 'Jérémie Amstutz',
								title: 'Ingénieur',
								hard_skills: ['Prototypage'],
								soft_skills: ['Autonomie'],
								goals: 'Conquérir le monde',
								experiences: '',
								educations:
									'ETHZ, MSc in Management, Technology and Economics, 2023\nEPFL, BSc in Civil Engineering, 2020',
								projects: 'waiter.so',
								company: 'Swisscom',
								job: 'Data Analyst',
								description: 'Savoir traire les vaches',
							}}
							onSubmit={async (values) => {
								setLoading(true)
								const res = await axios({
									method: 'POST',
									url: '/api/cover-letters',
									data: values,
								})
								setText(res.data.choices[0].text)
								setLoading(false)
							}}
						>
							<Form id="cover-letter">
								<Stepper activeStep={activeStep}>
									<Step>
										<PersonalInfoForm />
									</Step>
									<Step>
										<CompanyInfoForm />
									</Step>
								</Stepper>
							</Form>
						</Formik>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '1rem 1.5rem',
							borderTop: '1px solid #eee',
						}}
					>
						{activeStep === 0 ? (
							<Button
								type="button"
								variant="primary"
								onClick={() => setActiveStep(activeStep + 1)}
								style={{ marginLeft: 'auto' }}
							>
								Suivant
							</Button>
						) : (
							<>
								<Button
									type="button"
									onClick={() =>
										setActiveStep(activeStep - 1)
									}
								>
									Précédent
								</Button>
								<Button
									type="submit"
									variant="primary"
									disabled={loading}
									form="cover-letter"
								>
									{loading ? 'Chargement...' : 'Générer'}
								</Button>
							</>
						)}
					</div>
				</div>
				<div className={classes.output}>
					{text ? (
						<div
							style={{ outline: 'none' }}
							contentEditable={true}
							suppressContentEditableWarning={true}
							onInput={(event) =>
								console.log(event.target.textContent)
							}
							spellCheck={false}
						>
							{text}
						</div>
					) : (
						<div>Veuillez remplir le formulaire</div>
					)}
				</div>
			</div>
		</Layout>
	)
}
