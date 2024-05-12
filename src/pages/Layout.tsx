import { Link, Outlet } from 'react-router-dom';
import '../css/Layout.css';

const Layout = () => {
    return (
        <>
            <ul className="navbar">
                <li>
                    <Link to="/" className="nav-item">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shopping" className="nav-item">
                        Shopping
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="nav-item">
                        Login
                    </Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Layout;
