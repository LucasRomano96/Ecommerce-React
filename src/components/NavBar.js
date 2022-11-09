import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/category/all"><a className="navbar-brand" href="#">Manga.Shop</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-centrado">
                            <li className="nav-item">
                                <Link to="/category/shonen" className="nav-links">
                                    <a className="nav-link" href="#">Shonen</a>
                                </Link>    
                            </li>
                            <li className="nav-item">
                                <Link to="/category/seinen" className="nav-links">
                                    <a className="nav-link" href="#">Seinen</a>
                                </Link>    
                            </li>
                            <li className="nav-item">
                                <Link to="/category/gore" className="nav-links">
                                    <a className="nav-link" href="#">Gore</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;