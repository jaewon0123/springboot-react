import { Link } from "react-router-dom";
import '../../Header.css';

const Header = () => {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li className="nav-item"><Link className="nav-link" to="/">메인페이지</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/board">게시판</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/profile">프로필</Link></li>
      </ul>
    </nav>
  );
};
export default Header;
