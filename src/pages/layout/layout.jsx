import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;