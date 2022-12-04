import { useFormikContext } from 'formik'
import { Input, Select } from 'components/form'

import { HARD_SKILLS, SOFT_SKILLS } from 'constants/skills'

const hard_skills = HARD_SKILLS.map((skill) => ({
	value: skill,
	label: skill,
}))

const soft_skills = SOFT_SKILLS.map((skill) => ({
	value: skill,
	label: skill,
}))

export default function PersonalInfoForm() {
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
