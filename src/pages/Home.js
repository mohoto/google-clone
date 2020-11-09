import React from 'react';
import './Home.css';
import Header from './Header';
import Search from '../Components/interfaces/Search';

export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home__body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}
