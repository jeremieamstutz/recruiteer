import cn from 'clsx'
import Link from 'next/link'

import classes from './button.module.css'

export default function Button({
	href,
	variant = 'secondary',
	className,
	children,
	...props
}) {
	if (href) {
		return (
			<Link
				href={href}
				className={cn(
					classes.button,
					{
						[classes.primary]: variant === 'primary',
						[classes.secondary]: variant === 'secondary',
					},
					className,
				)}
				{...props}
			>
				{children}
			</Link>
		)
	}
	return (
		<button
			className={cn(
				classes.button,
				{
					[classes.primary]: variant === 'primary',
					[classes.secondary]: variant === 'secondary',
				},
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
