import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from '../components/MainContent';
import CursorEffect from '../components/Cursor';
import ScrollToTop from '../components/ScrollToTop';

function Layout() {
    return (
        <>
            <CursorEffect />
            <ScrollToTop/>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    )
}

export default Layout;