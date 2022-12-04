import Layout from 'components/layout/layout'
import JOBS from 'data/jobs'

export default function JobDescriptionPage({ job_description }) {
	return (
		<Layout>
			<div>{job_description.company}</div>
			<h1>{job_description.job}</h1>
			<div style={{ whiteSpace: 'pre-wrap' }}>{job_description.text}</div>
		</Layout>
	)
}

export async function getServerSideProps() {
	return {
		props: {
			job_description: JOBS[0],
		},
	}
}
