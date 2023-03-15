import React, { SVGProps } from 'react';

export interface CreditCardProps extends SVGProps<SVGSVGElement> {
	accessibilityLabel: string;
	color?: string;
}

export const CreditCard = React.forwardRef<SVGSVGElement, CreditCardProps>(({
	accessibilityLabel = '',
	color = '#F1F1F1',
	...props
}, ref) => {
	return (
		<svg
			ref={ref}
			xmlns='http://www.w3.org/2000/svg'
			role={accessibilityLabel ? 'img' : undefined}
			aria-hidden={accessibilityLabel === ''}
			aria-label={accessibilityLabel}
			aria-labelledby='Image--title'
			aria-describedby='Image--desc'
			x={0}
			y={0}
			width={39.791}
			height={30.428}
			viewBox='0 0 39.791 30.428'
			{...props}>
			<title id="Image--title"></title>
			<desc id="Image--desc"></desc>
		</svg>
	);
});

CreditCard.displayName = 'CreditCard';
export default CreditCard;
