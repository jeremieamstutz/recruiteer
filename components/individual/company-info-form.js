import { useFormikContext } from 'formik'
import { Input, Select } from 'components/form'




export default function CompanyInfoForm() {
	const { values, handleBlur, handleChange, setFieldValue } =
		useFormikContext()
	return (
		<>
			<Input
				label="Nom de votre entreprise"
				type="text"
				name="company"
				value={values.company}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Valeur de l'entreprise"
				type="text"
				name="values"
				value={values.values}
				onChange={handleChange}
				onBlur={handleBlur}
			/>

		</>
	)
}
