import Link from 'next/link'

import classes from './header.module.css'
import Logo from './logo'

export default function Header() {
	return (
		<header className={`container ${classes.header}`}>
			<Logo />
			<nav>
				<Link href="/cover-letters">Mes lettres de motivations</Link>
			</nav>
		</header>
	)
}
