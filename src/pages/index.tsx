import Navbar from '~/components/layout/Navbar';
import Header from '~/components/layout/Header';
import About from '~/components/layout/About';
import Contact from '~/components/layout/Contact';
import Footer from '~/components/layout/Footer';
import scss from '~/pages/index.module.scss';

const Index = () => {
	return (
		<section className={scss.index}>
			<Navbar classes={{ navbarWrapper: scss.indexWrapper }} />
			<Header classes={{ headerWrapper: scss.indexWrapper }} />

			<About classes={{ aboutWrapper: scss.indexWrapper }} />
			<Contact classes={{ contactWrapper: scss.indexWrapper }} />
			<Footer classes={{ footerWrapper: scss.indexWrapper }} />
		</section>
	);
};

export default Index;
