import React from 'react';
import fondoHeader from '@assets/header.jpg';
import NavbarHeader from '@components/NavbarHeader/NavbarHeader.jsx';
import './Header.scss';

const Header = () => {
    return (
        <div id="fondoHeader">
            <div id="carousel" className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={fondoHeader} className="d-block w-100" />
                    </div>
                    <div className="overlay carousel-caption">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col">
                                    <NavbarHeader/>
                                </div>
                            </div>
                            <div className="row textosBurger pt-5 mt-5">
                                <div className="col tituloBurger">
                                    <p className="letraBebas itgood text-start">It is a good time for the great taste of burgers</p>
                                    <h1 className="letraAlfa burger text-uppercase lh-1 text-start">Burger</h1>
                                    <h2 className="letraAlfa week text-uppercase lh-1 text-start">Week</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;