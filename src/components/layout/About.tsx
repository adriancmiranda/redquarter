import useClsx, { CssModule } from '~/hooks/useClsx';
import Card from '~/components/modules/Card';
import scss from './About.module.scss';

export interface AboutProps {
	classes?: CssModule;
	className?: string;
}

export const About: React.FC<AboutProps> = ({ className = '', classes }) => {
	const [styles, $] = useClsx(scss, classes);
	return (
		<aside className={$(styles.about, className)}>
			<div className={styles.aboutWrapper}>
				<Card
					imgSrc="/watermarks/system.png"
					imgWidth={317}
					imgHeight={273}
					title="MINIMIZAR CHARGEBACKS"
					subtitle="Sistema Anti-Fraude"
					description="Graças a tecnologia de inteligência artificial, desenvolvemos um rigoroso sistema antifraude, com o único objetivo de evitar o número de chargebacks de suas vendas e maximizar a conversão e faturamento de seu negócio."
					classes={{
						card: styles.aboutCard,
						cardImage: styles.aboutCardImage,
					}}
				/>
				<Card
					rtl={true}
					imgSrc="/watermarks/shield.png"
					imgWidth={311}
					imgHeight={279}
					title="DADOS CRIPTOGRAFADOS"
					subtitle="Tecnologia e Segurança"
					description="Utilizamos criptografia de ponta a ponta, proteção contra ataques DDos e diversas tecnologias em nuvem como Cloudflare e AWS. Seguimos todas as regras e políticas de privacidade da LGPD (Lei Geral de Proteção de Dados) e todos os funcionários são treinados e autenticados com sistemas zero-trust para garantir a máxima segurança dos dados."
					classes={{
						card: styles.aboutCard,
						cardImage: styles.aboutCardImage,
					}}
				/>
			</div>
		</aside>
	);
};

About.displayName = 'About';
export default About;
