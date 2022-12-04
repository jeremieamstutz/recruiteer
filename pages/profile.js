import { Formik, Form } from 'formik'

import Layout from 'components/layout/layout'
import PersonalInfoForm from 'components/individual/personal-info-form'
import Button from 'components/ui/button'

export default function ProfilePage() {
	return (
		<Layout>
			<Formik
				initialValues={{
					name: '',
					title: '',
					hard_skills: [],
					soft_skills: [],
					goals: '',
					experiences: '',
					educations: '',
					projects: '',
				}}
			>
				<Form
					style={{
						border: '1px solid #eee',
						padding: '1.5rem',
						borderRadius: '1rem',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						width: '100%',
						maxWidth: 600,
						margin: '0 auto',
					}}
				>
					<h1>Profil</h1>
					<PersonalInfoForm />
					<Button variant="primary" style={{ marginLeft: 'auto' }}>
						Enregistrer
					</Button>
				</Form>
			</Formik>
		</Layout>
	)
}
