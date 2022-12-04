import { useState } from 'react'
import axios from 'axios'
import { Formik, Form } from 'formik'

import Layout from 'components/layout/layout'
import { Step, Stepper } from 'components/form'
import Button from 'components/ui/button'

import classes from 'styles/new-job-description.module.css'
import CompanyInfoForm from 'components/individual/company-info-form'
import OfferInfoForm from 'components/individual/offer-info-form'

const INITIAL_VALUES = {
	company	: 'Cailler',
	values : ' Entreprise familial, bonne ambiance, travail en communotée',
	title :  'Chocolatier',
	responsabilities : 'Reprendre la chaine de productions des Branches cailler. Proposition de nouvelles recettes chocolatées.',
	requirements : 'Aimer son travail, savoir bien travailler le chocolat, montage d\'une crème fouetée. ',
	degrees : 'Formation supérieure & expérience : Titre de chocolatier. Minimum 10 an XP ',
	salary : '5000 chf/mois',
	procedure : 'CV et lettre de motivation, Sur place.Rédigez une description de poste adaptée avec les parties suivantes: Valeur de l\'entreprise, Description du poste, Compétence attendues, Conclusion.',
}

export default function NewJobDescriptionPage() {
	const [loading, setLoading] = useState(false)
	const [text, setText] = useState('')
	const [activeStep, setActiveStep] = useState(0)

	return (
		<Layout>
			<div className={classes.container}>
				<div className={classes.left}>
					<h1 style={{ margin: '0 0 1rem' }}>Nouvelle Offre d'emploi</h1>
					<div className={classes.input}>
						<div
							style={{
								padding: '1.5rem 1.5rem 1rem',
								borderBottom: '1px solid #eee',
							}}
						>
							<div
								style={{
									display: 'flex',
									background: '#f3f3f3',
									borderRadius: '0.5rem',
									overflow: 'hidden',
								}}
							>
								<span
									style={{
										cursor: 'pointer',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flex: 1,
										padding: '1rem',
										background:
											activeStep === 0 ? '#ddd' : '',
									}}
									onClick={() => setActiveStep(0)}
								>
									Entreprise
								</span>
								<span
									style={{
										cursor: 'pointer',
										display: 'flex',
										justifyContent: 'center',
										flex: 1,
										padding: '1rem',
										background:
											activeStep === 1 ? '#ddd' : '',
									}}
									onClick={() => setActiveStep(1)}
								>
									Poste
								</span>
							</div>
						</div>
						<div className={classes.body}>
							<Formik
								initialValues={INITIAL_VALUES}
								onSubmit={async (values) => {
									setLoading(true)
									const res = await axios({
										method: 'POST',
										url: '/api/job-descriptions',
										data: values,
									})
									setText(res.data.choices[0].text)
									setLoading(false)
								}}
							>
								<Form
									id="job-description"
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '0.75rem',
									}}
								>
									<Stepper activeStep={activeStep}>
										<Step>
											<CompanyInfoForm />
										</Step>
										<Step>
											<OfferInfoForm />
										</Step>
									</Stepper>
								</Form>
							</Formik>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: '1rem 1.5rem',
								borderTop: '1px solid #eee',
							}}
						>
							{activeStep === 0 ? (
								<Button
									type="button"
									variant="primary"
									onClick={() =>
										setActiveStep(activeStep + 1)
									}
									style={{ marginLeft: 'auto' }}
								>
									Suivant
								</Button>
							) : (
								<>
									<Button
										type="button"
										onClick={() =>
											setActiveStep(activeStep - 1)
										}
									>
										Précédent
									</Button>
									<Button
										type="submit"
										variant="primary"
										disabled={loading}
										form="job-description"
									>
										{loading ? 'Chargement...' : 'Générer'}
									</Button>
								</>
							)}
						</div>
					</div>
				</div>
				<div className={classes.output}>
					{text ? (
						<div
							style={{ outline: 'none' }}
							contentEditable={true}
							suppressContentEditableWarning={true}
							onInput={(event) =>
								console.log(event.target.textContent)
							}
							spellCheck={false}
						>
							{text.trim()}
						</div>
					) : (
						<div
							style={{
								flex: 1,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								width={24}
								height={24}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
							<div>Veuillez remplir le formulaire</div>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}
