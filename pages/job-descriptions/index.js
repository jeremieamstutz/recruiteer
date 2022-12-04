import Layout from 'components/layout/layout'
import Button from 'components/ui/button'
import Link from 'next/link'
import JOBS from 'data/jobs'
import { useState } from 'react'
import cn from 'clsx'

import classes from 'styles/job-descriptions.module.css'

function JobDescription({ job_description }) {
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
					<div>{job_description.company}</div>
					<h3 style={{ margin: 0 }}>{job_description.job}</h3>
				</div>
				<div>
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
				{job_description.text}
			</div>

			{job_description.notes && (
				<>
					<div
						style={{
							with: '100%',
							height: '1px',
							background: '#eee',
						}}
					/>
					<div>Notes</div>
					<div contentEditable={editing}>{job_description.notes}</div>
				</>
			)}
		</div>
	)
}

function JobDescriptionCard({ job_description, onClick, selected }) {
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
					<div>{job_description.company}</div>
					<h3 style={{ margin: 0 }}>{job_description.job}</h3>
				</div>
				<div
					style={{
						width: 8,
						height: 8,
						background:
							job_description.status === 'pending' ? 'orange' : 'green',
						borderRadius: '50%',
					}}
				/>
			</div>
		</div>
	)
}

export default function JobDescriptionPage() {
	const [selectedJobDescription, setSelectedJobDescription] = useState(0)
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
						<h1 style={{ margin: 0 }}>Nos Offres d'emplois</h1>
						<Button
							href="/job-descriptions/new"
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
					{JOBS.map((job_description, index) => (
						<JobDescriptionCard
							key={index}
							job_description={job_description}
							selected={selectedJobDescription === index}
							onClick={() => setSelectedJobDescription(index)}
						/>
					))}
				</div>
				<div style={{ flex: 2 }}>
					<JobDescription job_description={JOBS[selectedJobDescription]} />
				</div>
			</div>
		</Layout>
	)
}
