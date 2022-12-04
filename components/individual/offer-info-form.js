import { useFormikContext } from 'formik'
import { Input, Select } from 'components/form'

export default function OfferInfoForm() {
	const { values, handleBlur, handleChange, setFieldValue } =
		useFormikContext()
	return (
		<>
            <Input
				label="Profession"
				type="text"
				name="title"
				value={values.title}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Résponsabilité"
				type="text"
				name="responsabilities"
				value={values.responsabilities}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
            <Input
				label="Compétences requises"
				type="text"
				name="requirements"
				value={values.requirements}
				onChange={handleChange}
				onBlur={handleBlur}
			/>

			<Input
				label="Expériences / Education"
				type="text"
				name="degrees"
				value={values.degrees}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Salaire"
				type="text"
				name="salary"
				value={values.salary}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				label="Procédure de candidature"
				type="text"
				name="procedure"
				value={values.procedure}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</>
	)
}
