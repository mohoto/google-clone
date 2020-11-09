import React, {useState, useEffect} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {

    const [openMenu, setOpenMenu] = useState(true);
    const [largeur, setLargeur] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if(window.innerWidth < 768){
                setOpenMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth);
    })

    console.log(largeur);

    return (
        <div className="home__header">
            
                <>
                <MenuIcon className="menu__icon__responsive" onClick={() => setOpenMenu(!openMenu)}/>
                    <nav>
                        <div className="home__header__left">
                            <Link to="/about" >A propos</Link>
                            <Link to="/store" >Store</Link>
                        </div>
                        <div className="home__header__right__text">
                            <Link to="/gmail" >Gmail</Link>
                            <Link to="/images" >Images</Link>
                        </div>
                    </nav>
                    <div className="home__header__right__icon">
                        <Link to="/apps" >
                            <AppsIcon />
                        </Link>
                        <Link to="/">
                            <AccountCircleIcon />
                        </Link>
                    </div>
                </>
    
                {/* <MenuIcon className="menu__icon__responsive" onClick={() => setOpenMenu(!openMenu)}/> */}
            </div>
    )
}
