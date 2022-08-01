import React from 'react';
import './Footer.scss';
import logoFoo from '@assets/logo-burguer-footer.png';

const Footer = () => {
    return (
        <div id="footer" className="mx-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col py-5 px-4 logoFooter">
                        <img src={logoFoo} alt="" />
                    </div>
                </div>
                <div className="row px-4 ">
                    <div className="col-12 col-lg-4 pb-5">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi tempore sequi eligendi perferendis quia sunt ex expedita porro fugiat labore atque hic praesentium asperiores ratione, similique odit, laboriosam consectetur rerum.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-1 offset-lg-8">
                                <img className="icon-maps" src="https://icon-library.com/images/white-map-icon/white-map-icon-4.jpg" />
                            </div>
                            <div className="col-9 col-lg-3 ps-3">
                                <p className="letraBebas"> MAID ROAD, BUILDING NAME. COUNTRY</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 offset-lg-8">
                                <img className="icon-maps" src="https://www.seekpng.com/png/full/82-829985_white-e-mail-icon.png" />
                            </div>
                            <div className="col-9 col-lg-3 py-1 ps-4">
                                <p className="letraBebas"> INFO@COMPANYNAME.COM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-4 py-5">
                    <div className="col-12 col-lg-8">
                        <p className="letraBebas"> © COMPANY NAME 2020. ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="col-3 col-lg-1 socialItems">
                        <a className="social-item" href="https://www.instagram.com/"><span className="flaticon-011-instagram" /></a>
                    </div>
                    <div className="col-3 col-lg-1 socialItems">
                        <a className="social-item" href="#"><span className="flaticon-001-facebook" /></a>
                    </div>
                    <div className="col-3 col-lg-1 socialItems">
                        <a className="social-item" href="https://twitter.com/"><span className="flaticon-002-twitter" /></a>
                    </div>
                    <div className="col-3 col-lg-1 socialItems">
                        <a className="social-item" href="#"><span className="flaticon-003-whatsapp" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;