import React from 'react';
import ButtonAlways from '../../components/ButtonAlways/ButtonAlways';
import ButtonOrder from '../../components/ButtonsOrder/ButtonOrder';
import './ChooseMenu.scss';
import burger1 from '@assets/burguer1.png';
import burger2 from '@assets/burguer2.png';

const ChooseMenu = () => {
    return (
        <section id="chooseIt">
            <div className="container-fluid text-center my-5">
                <div className="row">
                    <div className="col py-4">
                        <ButtonAlways/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="letraAlfa text-uppercase tituloChoose">Choose &amp; Enjoy</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <p className="parrafoChoose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
                <div className="row justify-content-center orders">
                    <div className="col-8 col-xl-3 col-lg-6">
                        <img src={burger1} alt="Hamburgesa" />
                        <h2 className="letraBebas tituloLorem">Lorem Ipsum dolor</h2>
                        <p className="parrafoLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <ButtonOrder/>
                    </div>
                    <div className="col-8 col-xl-3 col-lg-6">
                        <img src={burger2} alt="Hamburgesa" />
                        <h2 className="letraBebas tituloLorem">Lorem Ipsum dolor</h2>
                        <p className="parrafoLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <ButtonOrder/>
                    </div>
                    <div className="col-8 col-xl-3 col-lg-6">
                        <img src={burger1} alt="Hamburgesa" />
                        <h2 className="letraBebas tituloLorem">Lorem Ipsum dolor</h2>
                        <p className="parrafoLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <ButtonOrder/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseMenu;