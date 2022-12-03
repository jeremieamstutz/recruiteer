import Layout from 'components/layout/layout'
import LETTERS from 'data/letters'

export default function CoverLetterPage({ letter }) {
	return (
		<Layout>
			<div>{letter.company}</div>
			<h1>{letter.job}</h1>
			<div style={{ whiteSpace: 'pre-wrap' }}>{letter.text}</div>
		</Layout>
	)
}

export async function getServerSideProps() {
	return {
		props: {
			letter: LETTERS[0],
		},
	}
}
