import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import './NavBar.css';

const NavBar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <h1><Link to="/">📝 SuriBlog</Link></h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                
                {/* Mostra Admin e Novo Post APENAS se estiver logado */}
                {user && (
                    <>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/new" className="new-btn">Novo Post</Link></li>
                    </>
                )}
                
                <li><ThemeToggle /></li>
                
                {/* Mostra Login ou Logout */}
                <li>
                    {user ? (
                        <button onClick={logout} className="logout-btn">
                            Sair ({user.name})
                        </button>
                    ) : (
                        <Link to="/login" className="login-btn-nav">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;