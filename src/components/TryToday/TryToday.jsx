import React from 'react';
import './TryToday.scss'

const TryToday = () => {
    return (
        <section id="tryIt" className="mt-5">
            <div className="container">
                <div className="row mx-4 justify-content-center align-items-center">
                    <div className="col-12 col-md-12 col-xl-5 fondoPopular px-4 py-4">
                        <p className="try letraBebas lh-1 mb-0">TRY IT TODAY</p>
                        <p className="more letraBebas lh-1">MOST POPULAR BURGER</p>
                    </div>
                    <div className="col-12 col-md-12 col-xl-5 mx-4 mt-3">
                        <div className="row">
                            <div className="col fondoDouble py-4 mb-4">
                                <p className="try letraBebas lh-1 mb-0">TRY IT TODAY</p>
                                <p className="more letraBebas lh-1">MORE FUN <br /> MORE TASTE</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col fondoChili py-4 mb-4">
                                <p className="try letraBebas lh-1 mb-0">TRY IT TODAY</p>
                                <p className="more letraBebas lh-1">FRESH &amp; CHILI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TryToday;