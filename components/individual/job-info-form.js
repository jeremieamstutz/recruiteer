import { useFormikContext } from 'formik'
import { Input } from 'components/form'
import axios from 'axios'
import Button from 'components/ui/button'
import { useState } from 'react'

export default function JobInfoForm() {
	const [loading, setLoading] = useState(false)
	const { values, handleBlur, handleChange, setFieldValue } =
		useFormikContext()
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<Input
					label="Linkedin"
					placeholder="https://www.linkedin.com/jobs/collections/recommended/..."
					type="text"
					name="url"
					maxLength={100}
					value={values.url}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<Button
					type="button"
					onClick={async () => {
						if (!values.url) {
							return
						}
						setLoading(true)
						const res = await axios({
							method: 'POST',
							url: '/api/load-job',
							data: { url: values.url },
						})
						const job = res.data
						setFieldValue('company', job.company)
						setFieldValue('job', job.job)
						setFieldValue('description', job.description)
						setLoading(false)
					}}
				>
					{loading ? 'Chargement...' : 'Charger'}
				</Button>
			</div>
			<Input
				label="Entreprise"
				type="text"
				name="company"
				maxLength={100}
				value={values.company}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Poste"
				type="text"
				maxLength={100}
				name="job"
				value={values.job}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Description"
				type="textarea"
				maxLength={3000}
				rows={12}
				name="description"
				value={values.description}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</>
	)
}
