import useClsx, { CssModule } from '~/hooks/useClsx';
import * as Brands from '~/components/brands';
import scss from './Footer.module.scss';

export interface FooterProps {
	classes?: CssModule;
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '', classes }) => {
	const [styles, $] = useClsx(scss, classes);
	return (
		<footer className={$(styles.footer, className)}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerSign}>
					<Brands.Transaciona accessibilityLabel='Transaciona' colorDetails='#CCBFE8' />
					<small className={styles.footerSignDate}>2023</small>
				</div>
				<nav className={styles.footerNav}>
					<a href="#">Política de privacidade</a>
					<a href="#">Política de cookies</a>
				</nav>
			</div>
		</footer>
	);
};

Footer.displayName = 'Footer';
export default Footer;
