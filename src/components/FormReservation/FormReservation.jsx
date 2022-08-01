import React from 'react';
import './FormReservation.scss';

const FormReservation = () => {
    return (
        <form id="formulario">
            <div className="row">
                <div className="form-label col-12 col-xl-6">
                    <input type="name" className="form-control text-uppercase letraBebas py-3 my-1" minLength={5} id="name" placeholder="Name" required />
                </div>
                <div className="form-label col-12 col-xl-6">
                    <input type="date" className="form-control text-uppercase letraBebas py-3 my-1" id="fecha" placeholder="Date" required />
                </div>
            </div>
            <div className="row">
                <div className="form-label col-12 col-xl-6">
                    <input type="number" className="form-control text-uppercase letraBebas py-3 my-1" id="people" placeholder="People" required />
                </div>
                <div className="form-label col-12 col-xl-6">
                    <input type="email" className="form-control text-uppercase letraBebas py-3 my-1" id="email" placeholder="Email" required />
                </div>
            </div>
            <div className="row">
                <div className="form-label col-12 col-xl-6">
                    <input type="time" className="form-control text-uppercase letraBebas py-3 my-1" id="time" placeholder="Time" required />
                </div>
                <div className="form-label col-12 col-xl-6">
                    <button type="submit" className="letraAlfa submit form-control btn text-uppercase btn-find py-3 my-1 lh-sm">Find a table</button>
                </div>
            </div>
            <p className="text-danger mb-2 d-none" id="alertEmail" />
        </form>
    );
}

export default FormReservation;