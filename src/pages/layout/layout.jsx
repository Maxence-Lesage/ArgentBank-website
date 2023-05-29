import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import './layout.scss';

function Layout({ children }) {
    return (
        <body>
            <Navbar />
            <main className='main bg-dark'>{children}</main>
            <Footer />
        </body>
    );
}

export default Layout;