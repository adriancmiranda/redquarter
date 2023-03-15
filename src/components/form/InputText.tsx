import $ from 'clsx';
import { forwardRef } from 'react';
import Input, { InputProps, InputRef } from './Input';
import scss from './InputText.module.scss';

export type InputTextRef = InputRef;
export type InputTextProps = InputProps & {
	id?: string;
	label?: string;
	htmlFor?: string;
	error?: string;
};

export const InputText = forwardRef<InputRef, InputTextProps>(
	({ id, htmlFor, className = '', label = '', error, children, ...attrs }, ref) => {
		return (
			<div className={$(scss.inputText, className, {
				[scss.error]: error,
			})}>
				<Input
					ref={ref}
					id={htmlFor ?? id}
					type="text"
					className={scss.inputTextComponent}
					{...attrs}
				/>
				{label && (
					<label htmlFor={htmlFor ?? id} className={scss.inputTextLabel}>
						<span className={scss.inputTextLabelNode}>{label}</span>
					</label>
				)}
				<div>{error && <small className={scss.inputTextError}>{error}</small>}</div>
				{children}
			</div>
		);
	},
);

InputText.displayName = 'InputText';
export default InputText;
