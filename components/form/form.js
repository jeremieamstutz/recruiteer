import classes from './form.module.css'

export default function Form({ children, ...props }) {
	return (
		<form className={classes.form} {...props}>
			{children}
		</form>
	)
}
