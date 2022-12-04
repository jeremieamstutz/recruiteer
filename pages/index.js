import Layout from 'components/layout/layout'
import Head from 'next/head'
import Image from 'next/image'

function Bubble({ title, body }) {
	return (
		<div
			style={{
				background: '#eee',
				padding: '1rem 2rem',
				borderRadius: '0.5rem',
			}}
		>
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
	)
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Recruiteer</title>
				<meta
					name="description"
					content="Générateur de lettre de motivation"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<section
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '2rem',
						maxWidth: '80%',
						margin: '2rem auto',
					}}
				>
					<div>
						<h1 style={{ margin: '1rem 0', fontSize: '2rem' }}>
							Rédiger votre lettre de motivation en 30 secondes
						</h1>
						<p style={{ fontSize: '1.5rem', lineHeight: '130%' }}>
							Renseigner vos détails personnels ainsi que la
							description du poste, et laisser notre intelligence
							artificielle s'occuper du reste.
						</p>
						{/* <p>Economisez du temps
							et optimisez vos candidatures, notre plateforme vous
							permet de générer en moins d'une minute une lettre
							de motivation personnalisée qui saura mettre en
							avant votre profil et impressionner l'entreprise
							visée. Plus besoin de passer des heures sur la
							rédaction d'une lettre !</p> */}
					</div>
					<Image
						src="/images/pexels-liza-summer-6347901.jpg"
						width={400}
						height={400}
						style={{
							flexShrink: 0,
							objectFit: 'cover',
							borderRadius: '50%',
						}}
					/>
				</section>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '2rem',
						maxWidth: '90%',
						margin: '0 auto',
					}}
				>
					<section
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr',
							gap: '2rem',
							margin: '2rem auto',
						}}
					>
						<Bubble
							title="Lettre personnalisé"
							body="Génère des lettres de motivations personnalisées, propres à chaque candidature."
						/>
						<Bubble
							title="Générateur d'offre d'emploi"
							body="Outil professionnel qui génère des offres d'emploi proposes à l'entreprise de manière simplifée et automatique."
						/>
						<Bubble
							title="Gestion des candidature"
							body="Organisation et suivi des candidatures en cours."
						/>
					</section>
				</div>
			</Layout>
		</>
	)
}
