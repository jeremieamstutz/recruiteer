import Image from 'next/image'
import Link from 'next/link'

import classes from './header.module.css'
import Logo from './logo'

export default function Header() {
	return (
		<header className={`container ${classes.header}`}>
			<Logo />
			<nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
				<Link href="/applications">Mes postulations</Link>
				<Link href="/profile">Profil</Link>
				<Link href="/profile">
					<Image
						src="/images/IMG_8116.jpg"
						alt="Profile picture"
						width={48}
						height={48}
						style={{ borderRadius: '50%' }}
					/>
				</Link>
			</nav>
		</header>
	)
}
