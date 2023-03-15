import Head from 'next/head'
import { FC, ReactNode } from 'react';
import useMatchMedia from '~/hooks/useMatchMedia';
import Guidelines from './Guidelines';

export interface LayoutProps {
	children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	const mediaQueryMatches = useMatchMedia('(max-width: 1024px)');

	return (
		<>
			<Head>
				<title>Transaciona</title>
				<meta name="description" content="Teste realizado por Adrian C. Miranda em 03/2023" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main data-ui-layout={mediaQueryMatches ? 'mobile' : 'desktop'}>
				{children}
			</main>

			<Guidelines columns={12} rows={2} />
		</>
	);
};

Layout.displayName = 'Layout';
export default Layout;
