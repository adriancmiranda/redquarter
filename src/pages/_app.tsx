import '~/theme';
import '~/pages/_app.globals.scss';
import type { AppProps } from 'next/app'
import Layout from '~/components/layout';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
