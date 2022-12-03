import classes from './main.module.css'

export default function Main({ children }) {
	return <main className={`container ${classes.main}`}>{children}</main>
}
