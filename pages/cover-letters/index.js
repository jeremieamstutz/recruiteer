import Layout from 'components/layout/layout'
import Button from 'components/ui/button'
import Link from 'next/link'
import LETTERS from 'data/letters'
import { useState } from 'react'
import cn from 'clsx'

import classes from 'styles/cover-letters.module.css'

// function CoverLetter({ letter }) {
// 	const [clamped, setClamped] = useState(true)

// 	return (
// 		<div
// 			style={{
// 				padding: '1rem 0',
// 				borderRadius: '1rem',
// 				padding: '1rem',
// 				border: '1px solid #eee',
// 				display: 'flex',
// 				flexDirection: 'column',
// 				gap: '1rem',
// 				height: 'fit-content',
// 			}}
// 		>
// 			<div
// 				style={{
// 					display: 'flex',
// 					gap: '1rem',
// 					alignItems: 'center',
// 				}}
// 			>
// 				<div
// 					style={{
// 						width: 48,
// 						height: 48,
// 						background: '#999',
// 						borderRadius: '0.5rem',
// 					}}
// 				/>
// 				<div
// 					style={{
// 						flex: 1,
// 					}}
// 				>
// 					<div>{letter.company}</div>
// 					<h3 style={{ margin: 0 }}>{letter.job}</h3>
// 				</div>
// 				<div>
// 					<Button>Modifier</Button>
// 				</div>
// 			</div>
// 			<div className={cn(classes.text, { [classes.clamp]: clamped })}>
// 				{letter.text}
// 			</div>
// 			<Button
// 				onClick={() => setClamped(!clamped)}
// 				style={{
// 					cursor: 'pointer',
// 					borderTop: '1px solid #eee',
// 					borderRadius: 0,
// 					background: 'transparent',
// 					marginBottom: '-0.5rem',
// 				}}
// 			>
// 				{clamped ? 'Agrandir' : 'Réduire'}
// 			</Button>
// 		</div>
// 	)
// }

function CoverLetter({ letter }) {
	const [clamped, setClamped] = useState(true)

	return (
		<div
			style={{
				padding: '1rem 0',
				borderRadius: '1rem',
				padding: '1rem',
				border: '1px solid #eee',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				height: 'fit-content',
			}}
		>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: 48,
						height: 48,
						background: '#999',
						borderRadius: '0.5rem',
					}}
				/>
				<div
					style={{
						flex: 1,
					}}
				>
					<div>{letter.company}</div>
					<h3 style={{ margin: 0 }}>{letter.job}</h3>
				</div>
				<div>
					<Button>Modifier</Button>
				</div>
			</div>
			<div className={classes.text}>{letter.text}</div>
		</div>
	)
}

function CoverLetterCard({ letter, onClick, selected }) {
	return (
		<div
			style={{
				padding: '1rem 0',
				borderRadius: '1rem',
				padding: '1rem',
				border: '1px solid #eee',
				background: selected ? '#f3f3f3' : '',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				height: 'fit-content',
				cursor: 'pointer',
			}}
			onClick={onClick}
		>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: 48,
						height: 48,
						background: '#999',
						borderRadius: '0.5rem',
					}}
				/>
				<div
					style={{
						flex: 1,
					}}
				>
					<div>{letter.company}</div>
					<h3 style={{ margin: 0 }}>{letter.job}</h3>
				</div>
				<div
					style={{
						width: 8,
						height: 8,
						background:
							letter.status === 'pending' ? 'orange' : 'green',
						borderRadius: '50%',
					}}
				></div>
			</div>
		</div>
	)
}

export default function CoverLettersPage() {
	const [selectedLetter, setSelectedLetter] = useState(0)
	return (
		<Layout>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						flex: 1,
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '0.5rem 0',
						}}
					>
						<h1 style={{ margin: 0 }}>Mes lettres</h1>
						<Button
							href="/cover-letters/new"
							variant="primary"
							style={{
								width: '3rem',
								padding: 0,
								minWidth: 0,
								borderRadius: '50%',
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								width={20}
								height={20}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
						</Button>
					</div>
					{/* <h1 style={{ margin: 0 }}>Mes lettres</h1>
					<Button href="/cover-letters/new" variant="primary">
						Nouvelle lettre
					</Button> */}
					{LETTERS.map((letter, index) => (
						<CoverLetterCard
							key={index}
							letter={letter}
							selected={selectedLetter === index}
							onClick={() => setSelectedLetter(index)}
						/>
					))}
				</div>
				<div style={{ flex: 2 }}>
					<CoverLetter letter={LETTERS[selectedLetter]} />
				</div>
			</div>
		</Layout>
	)
}
