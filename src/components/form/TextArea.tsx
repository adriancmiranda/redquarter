import $ from 'clsx';
import { forwardRef, TextareaHTMLAttributes } from 'react';
import scss from './TextArea.module.scss';

export type TextAreaRef = HTMLTextAreaElement;
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	id?: string;
	label?: string;
	htmlFor?: string;
	error?: string;
};

export const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
	({ id, htmlFor, className = '', label = '', error, children, ...attrs }, ref) => {
		return (
			<div className={$(scss.textArea, className, {
				[scss.error]: error,
			})}>
				<textarea
					ref={ref}
					className={$(scss.textAreaComponent, className)}
					{...attrs}
				/>
				{label && (
					<label htmlFor={htmlFor ?? id} className={scss.textAreaLabel}>
						<span className={scss.textAreaLabelNode}>{label}</span>
					</label>
				)}
				<div>{error && <small className={scss.textAreaError}>{error}</small>}</div>
				{children}
			</div>
		);
	});

TextArea.displayName = 'TextArea';
export default TextArea;
