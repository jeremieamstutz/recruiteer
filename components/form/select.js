import Creatable from 'react-select/creatable'

import classes from './select.module.css'
export default function Select({ label, ...props }) {
	return (
		<div className={classes['form-group']}>
			<label>{label}</label>
			<Creatable {...props} />
		</div>
	)
}
