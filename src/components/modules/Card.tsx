import { FC } from 'react';
import NextImage from 'next/image'
import useClsx, { CssModule } from '~/hooks/useClsx';
import scss from './Card.module.scss';

export interface CardProps {
	className?: string;
	classes?: CssModule;
	imgSrc: string;
	imgWidth: number;
	imgHeight: number;
	title: string;
	subtitle: string;
	description: string;
	rtl?: boolean;
}

export const Card: FC<CardProps> = ({ className = '', classes, imgSrc, imgWidth, imgHeight, title, subtitle, description, rtl = false, ...props }) => {
	const [styles, $] = useClsx(scss, classes);
	return (
		<section className={$(styles.card, className, { [styles.rtl]: rtl })} {...props}>
			<div className={styles.cardWrapper}>
				<div className={styles.cardContent}>
					<h2 className={styles.cardTitle}>{title}</h2>
					<h3 className={styles.cardSubtitle}>{subtitle}</h3>
					<p className={styles.cardDescription}>{description}</p>
				</div>
				<NextImage className={styles.cardImage} src={imgSrc} width={imgWidth} height={imgHeight} alt={title} />
			</div>
		</section>
	)
};

Card.displayName = 'Card';
export default Card;
