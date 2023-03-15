import $ from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import Button from './Button';
import scss from './index.module.scss';

export type FormRef = HTMLFormElement;
export type FormProps = InputHTMLAttributes<HTMLFormElement> & {
	className?: string;
};

export const Form = forwardRef<FormRef, FormProps>(({ className, children, ...props }, ref) => {
	const onSubmit = (evt: any) => {
		evt.preventDefault();
		alert();
	}
	return (
		<form
			ref={ref}
			className={$(scss.form, className)}
			{...props}>
			<fieldset className={scss.formFieldset}>
				<legend className={scss.formLegend}>
					Envie suas dúvidas sobre cobranças
				</legend>
				<section className={scss.formSection}>
					<InputText label={'Nome:'} id={'name'} required autoComplete="off" />
					<InputText label={'E-mail:'} id={'email'} required autoComplete="off" />
					<InputText label={'Assunto: Cobrança / Pagamento'} required id={'assunto'} autoComplete="off" />
					<InputText label={'Nome que aparece na cobrança:'} required id={'rotulo'} autoComplete="off" />
					<TextArea label={'Mensagem:'} id={'mensagem'} required autoComplete="off" />
					<Button className={scss.formButton} onSubmit={onSubmit}>Enviar</Button>
				</section>
			</fieldset>
			<div className={scss.formPlusSign} />
		</form>
	);
});

Form.displayName = 'Form';
export default Form;
