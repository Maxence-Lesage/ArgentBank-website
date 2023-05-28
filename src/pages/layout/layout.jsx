import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import './layout.scss';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='main bg-dark'>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;