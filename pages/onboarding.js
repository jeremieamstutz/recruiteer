import { Button, Form, Input, Select } from 'components/form'
import Layout from 'components/layout/layout'

const SKILLS = [
	{
		value: 'test',
		label: 'test',
	},
	{
		value: 'test2',
		label: 'test2',
	},
]

export default function OnboardingPage() {
	return (
		<Layout>
			<Form>
				<Input label="Nom" type="text" />
				<Select label="Profession" />
				<Select label="Compétences" options={SKILLS} isMulti={true} />
				<Select label="Savoir être" />
				<Input label="Objectifs" type="text" />
				<Input label="Expériences" type="text" />
				<Input label="Projets" type="text" />
				<Button>Enregistrer</Button>
			</Form>
		</Layout>
	)
}
