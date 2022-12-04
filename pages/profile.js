import { Formik, Form } from 'formik'

import Layout from 'components/layout/layout'
import PersonalInfoForm from 'components/individual/personal-info-form'
import Button from 'components/ui/button'
import axios from 'axios'
import { useRouter } from 'next/router'
import { User } from 'db/models'

export default function ProfilePage({ user }) {
	const router = useRouter()
	return (
		<Layout>
			<Formik
				initialValues={{
					name: user?.name ?? '',
					title: user?.title ?? '',
					hard_skills: user?.hard_skills ?? [],
					soft_skills: user?.soft_skills ?? [],
					goals: user?.goals ?? '',
					experiences: user?.experiences ?? '',
					educations: user?.educations ?? '',
					projects: user?.projects ?? '',
				}}
				onSubmit={async (user) => {
					await axios({
						method: 'POST',
						url: '/api/users',
						data: user,
					})
					router.push('/applications')
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

export async function getServerSideProps() {
	const user = await User.findOne()

	return {
		props: {
			user: JSON.parse(JSON.stringify(user)),
		},
	}
}
