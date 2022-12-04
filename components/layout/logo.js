import Link from 'next/link'
import classes from './logo.module.css'

export default function Logo() {
	return (
		<Link href="/" className={classes.logo}>
			Recruiteer
		</Link>
	)
}
