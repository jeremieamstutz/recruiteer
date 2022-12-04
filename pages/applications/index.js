import Layout from 'components/layout/layout'
import Button from 'components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import cn from 'clsx'
import useSWR, { mutate } from 'swr'

import classes from 'styles/cover-letters.module.css'
import { Application } from 'db/models'
import axios from 'axios'

const fetcher = (url) => fetch(url).then((r) => r.json())

function ApplicationDetails({ application, onChange }) {
	const [editing, setEditing] = useState(false)

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
					<div>{application.company}</div>
					<h3 style={{ margin: 0 }}>{application.job}</h3>
				</div>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<Button
						onClick={async () => {
							await axios({
								method: 'DELETE',
								url: '/api/applications/' + application.id,
							})
							await mutate('/api/applications')
							onChange()
						}}
					>
						Supprimer
					</Button>
					<Button onClick={() => setEditing(!editing)}>
						{editing ? 'Enregister' : 'Modifier'}
					</Button>
				</div>
			</div>
			<div
				className={classes.text}
				style={{ outline: 'none' }}
				contentEditable={editing}
			>
				{application.letter}
			</div>

			{application.notes && (
				<>
					<div
						style={{
							with: '100%',
							height: '1px',
							background: '#eee',
						}}
					/>
					<div>Notes</div>
					<div contentEditable={editing}>{application.notes}</div>
				</>
			)}
		</div>
	)
}

function ApplicationCard({ application, onClick, selected }) {
	return (
		<div
			style={{
				borderRadius: '1rem',
				padding: '1rem',
				border: '1px solid #eee',
				background: selected ? '#f3f3f3' : '',
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
						display: 'flex',
						flexDirection: 'column',
						gap: '0.25rem',
					}}
				>
					<div>{application.company}</div>
					<h3 style={{ margin: 0 }}>{application.job}</h3>
				</div>
				<div
					style={{
						width: 8,
						height: 8,
						background:
							application.status === 'pending'
								? 'orange'
								: 'green',
						borderRadius: '50%',
					}}
				/>
			</div>
		</div>
	)
}

export default function ApplicationsPage({
	applications: initialApplications,
}) {
	const [selectedApplication, setSelectedApplication] = useState(0)
	const { data: applications } = useSWR('/api/applications', fetcher, {
		fallbackData: initialApplications,
	})
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
						<h1 style={{ margin: 0 }}>Mes postulations</h1>
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
					{applications.map((application, index) => (
						<ApplicationCard
							key={index}
							application={application}
							selected={selectedApplication === index}
							onClick={() => setSelectedApplication(index)}
						/>
					))}
				</div>
				<div style={{ flex: 2 }}>
					{applications.length > 0 &&
						applications[selectedApplication] && (
							<ApplicationDetails
								application={applications[selectedApplication]}
								onChange={() =>
									setSelectedApplication(
										selectedApplication - 1,
									)
								}
							/>
						)}
				</div>
			</div>
		</Layout>
	)
}

export async function getServerSideProps() {
	const applications = await Application.findAll()
	return {
		props: {
			applications: JSON.parse(JSON.stringify(applications)),
		},
	}
}
