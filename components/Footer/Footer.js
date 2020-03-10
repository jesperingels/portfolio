import Link from 'next/link';
import './Footer.css'

const Footer = () => (
    <footer>
        <nav>
            <Link href="/bijlages">
                <a>Bijlages</a>
            </Link>
            <Link href="/reflectie">
                <a>Reflectie</a>
            </Link>
            <Link href="/bronnen">
                <a>Bronnen</a>
            </Link>
        </nav>
    </footer>
  );
  
  export default Footer;