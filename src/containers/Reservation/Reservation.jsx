import React from 'react';
import FormReservation from '../../components/FormReservation/FormReservation';
import './Reservation.scss'

const Reservation = () => {
    return (
        <section id="contactUs">
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="col">
                            <h3 className="letraBebas tituloReser ">Reservation</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <h2 className="letraAlfa tituloBook text-uppercase">Book your tabler</h2>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col col-md-12 col-lg-8 offset-lg-2 pt-3">
                            <FormReservation/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reservation;