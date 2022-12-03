import classes from './input.module.css'

export default function Input({ label, type, ...props }) {
	switch (type) {
		case 'textarea': {
			return (
				<div className={classes['form-group']}>
					<label>{label}</label>
					<div className={classes['input-group']}>
						<textarea className={classes.input} {...props} />
					</div>
				</div>
			)
		}
		default: {
			return (
				<div className={classes['form-group']}>
					<label>{label}</label>
					<div className={classes['input-group']}>
						<input
							className={classes.input}
							type={type}
							{...props}
						/>
					</div>
				</div>
			)
		}
	}
}