import React from 'react';
import './Notice.scss';
import burger4 from '@assets/burger-image4.jpg';

const Notice = () => {
    return (
        <section id="noticeUp"> {/* flex-shrink-0*/}
            <div className="slider-contenedor d-flex py-5">
                <div className="contenido-slider container-fluid flex-shrink-0" id="slide1">
                    <div className="container shadowDiscover">
                        <div className="row">
                            <div className="col-12 col-xl-6 col-md-8 py-5 px-5">
                                <h3 className="letraBebas tituloDiscover mb-0 pb-0">Discover1</h3>
                                <h2 className="letraAlfa text-uppercase tituloUp mt-0 pt-0">Upcoming Events</h2>
                                <p className="parrafoDiscover">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam error molestias ab nobis optio, nisi sint maxime inventore eius ducimus deserunt velit facilis nulla et doloribus repellendus possimus delectus omnis.</p>
                                <div className="dots-container">
                                    <a href="#slide1"><div className="dot dot-amarillo" /></a>
                                    <a href="#slide2"><div className="dot" /></a>
                                    <a href="#slide3"><div className="dot" /></a>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 col-md-8 py-3 px-3 imgDiscover">
                                <img src={burger4} alt='burger' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notice;