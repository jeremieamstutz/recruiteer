import Header from 'components/layout/header'
import Container from 'components/layout/container'
import Main from 'components/layout/main'

export default function Layout({ children }) {
	return (
		<>
			<Container>
				<Header />
				<Main>{children}</Main>
			</Container>
		</>
	)
}
