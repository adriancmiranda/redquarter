import useClsx, { CssModule } from '~/hooks/useClsx';
import NextImage from 'next/image'
import scss from './Header.module.scss';

export interface HeaderProps {
	classes?: CssModule;
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '', classes }) => {
	const [styles, $] = useClsx(scss, classes);
	return (
		<header className={$(styles.header, className)}>
			<div className={styles.headerWrapper}>
				<div className={styles.headerCard}>
					<h1 className={styles.headerCardTitle}>Gestão de <mark>Carteiras</mark><br /><mark>Virtuais</mark></h1>
					<p className={styles.headerCardDescription}>Infraestrutura de pagamentos e recebimentos instantâneos entre usuários da plataforma, reconhecida por sua transparência e segurança nas transações, graças a criptografia dos dados e tecnologia embarcada.</p>
				</div>
				<NextImage className={styles.headerImage} src={'/watermarks/wallet.png'} width={491} height={457} alt={''} priority />
			</div>
		</header>
	);
};

Header.displayName = 'Header';
export default Header;

