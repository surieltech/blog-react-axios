import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>📝 SuriBlog </h3>
                    <p>Um espaço para compartilhar ideias</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} SuriBlog. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;