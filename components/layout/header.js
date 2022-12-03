import Link from 'next/link'

import classes from './header.module.css'

export default function Header() {
	return (
		<header className={classes.header}>
			<div>Recruiteer.</div>
			<nav>
				<Link href="/cover-letters/new">New cover letter</Link>
			</nav>
		</header>
	)
}
