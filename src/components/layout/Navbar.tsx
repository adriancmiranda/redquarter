import useClsx, { CssModule } from '~/hooks/useClsx';
import * as Brands from '~/components/brands';
import Button from '~/components/form/Button';
import scss from './Navbar.module.scss';

export interface NavbarProps {
	classes?: CssModule;
	className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '', classes }) => {
	const [styles, $] = useClsx(scss, classes);
	return (
		<nav className={$(styles.navbar, className)}>
			<div className={styles.navbarWrapper}>
				<div className={styles.navbarBrand}>
					<Brands.Transaciona className={styles.navbarBrand} accessibilityLabel='Transaciona' />
				</div>
				<div className={styles.navbarButton}>
					<Button className={styles.navbarButtonComponent}>Dúvidas de Cobranças?</Button>
				</div>
			</div>
		</nav>
	);
};

Navbar.displayName = 'Navbar';
export default Navbar;
