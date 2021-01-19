import React from 'react';

const Banner = () => {
    return (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
            <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDTeam</p>
            <p> Tu futuro te esta esperando</p>
            <a href="#" className="button">Suscribirse</a>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Banner;