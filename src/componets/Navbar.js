import React from 'react'

function Navbar() {
    return (
        <>
            <div style={{zIndex:"999"}} className='position-sticky top-0'>
                <div className="container-fluid bg-light p-0">
                    <div className="row gx-0 d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
                                <small className="fa fa-phone-alt me-2" />
                                <small>+012 345 6789</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center border-end px-3">
                                <small className="far fa-envelope-open me-2" />
                                <small>info@example.com</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center border-end px-3">
                                <small className="far fa-clock me-2" />
                                <small>Mon - Fri : 09 AM - 09 PM</small>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="h-100 d-inline-flex align-items-center">
                                <a className="btn btn-square border-end border-start" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-square border-end" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-square border-end" href><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-square border-end" href><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-white navbar-light  top-0  px-4 px-lg-5 py-lg-0">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <h2 className="m-0"><i className="fa fa-building text-primary me-3" />GO-services</h2>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-3 py-lg-0">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/about" className="nav-item nav-link">About Us</a>
                            <a href="/services" className="nav-item nav-link">Our Services</a>
                            <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu bg-light m-0">
                                    <a href="/features" className="dropdown-item">Features</a>
                                    <a href="/appoiment" className="dropdown-item">Appointment</a>
                                    <a href="/team" className="dropdown-item">Our Team</a>
                                    <a href="/testimonial" className="dropdown-item">Testimonial</a>
                                    <a href="/error" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="/contact" className="nav-item nav-link">Contact Us</a>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar