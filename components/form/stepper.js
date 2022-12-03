import { useState } from 'react'

export function Stepper({ activeStep, children }) {
	return children[activeStep]
}

export function Step({ label = '', index, children }) {
	return children
}
