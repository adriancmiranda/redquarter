import $ from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';
import scss from './Input.module.scss';

export type InputRef = HTMLInputElement;
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input = forwardRef<InputRef, InputProps>(({ className, ...props }, ref) => {
	return (
		<input
			ref={ref}
			className={$(scss.input, className)}
			{...props}
		/>
	);
});

Input.displayName = 'Input';
export default Input;
