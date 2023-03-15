import $ from 'clsx';
import React, { DOMAttributes, forwardRef } from 'react';
import scss from './Button.module.scss';

export type ButtonRef = HTMLButtonElement;
export type ButtonProps = DOMAttributes<HTMLButtonElement> & {
	className?: string;
	selected?: boolean;
	disabled?: boolean;
	variant?: string;
};

export const Button = forwardRef<ButtonRef, ButtonProps>(
	({ variant, className = '', selected, disabled, children, ...props }, ref) => {
		return children ? (
			<button
				ref={ref}
				{...props}
				disabled={disabled}
				className={$(scss.button, className, {
					[scss.isDisabled]: disabled === undefined ? false : disabled,
					[scss.isActive]: selected === undefined ? false : selected,
				})}
			>
				{children}
			</button>
		) : null;
	},
);

Button.displayName = 'Button';
export default React.memo(Button);
