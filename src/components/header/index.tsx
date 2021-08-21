import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Welcome to the Dark Side!</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/fanart">
                    Fan Comics and Movies
                </Link>
                <Link activeClassName={style.active} href="/fanart/about">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;
