import useClsx, { CssModule } from '~/hooks/useClsx';
import * as Brands from '~/components/brands';
import Form from '~/components/form';
import scss from './Contact.module.scss';

export interface ContactProps {
	classes?: CssModule;
	className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className = '', classes }) => {
	const [styles, $] = useClsx(scss, classes);
	return (
		<section className={$(styles.contact, className)}>
			<div className={styles.contactWrapper}>
				<section className={styles.contactCard}>
					<h2 className={styles.contactCardTitle}>CONTATO</h2>
					<h3 className={styles.contactCardSubtitle}>Dúvidas sobre Cobranças?</h3>
					<p className={styles.contactCardDescription}>Se você acredita ter sido cobrado indevidamente pela Transaciona em sua fatura, por favor preencha o formulário ao lado que iremos te ajudar.</p>
				</section>
				<section className={styles.contactSection}>
					<Form className={styles.contactComponent} />
				</section>
				<div className={styles.contactContext}>
					<p className={styles.contactContextTitle}>A Transaciona gerencia a cobrança para os sites:</p>
					<div className={styles.contactContextBrands}>
						<Brands.CameraPrive accessibilityLabel='Camera Prive' />
						<Brands.CameraHot accessibilityLabel='Camera Hot' />
						<Brands.FanFever accessibilityLabel='Fan Fever' />
					</div>
					<p className={styles.contactContextDescription}>Lorem ipsum dolor sit amet confutatis dies irae dies illa solvet saeclum in favillla test david cum sybilla quantus tremor est venturus cuncta stricte discussurus.</p>
				</div>
			</div>
		</section>
	);
};

Contact.displayName = 'Contact';
export default Contact;

