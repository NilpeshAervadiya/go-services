import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'

export default function Services() {
  return (
    <>
    <Navbar/>

    {/* Page Header Start*/}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-4">Our Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Our Services</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* Page Header End */}


    {/* Service Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-end mb-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="border-start border-5 border-primary ps-4">
                        <h6 className="text-body text-uppercase mb-2">Our Services</h6>
                        <h1 className="display-6 mb-0">Construction And Renovation Solutions</h1>
                    </div>
                </div>
                <div className="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.3s">
                    <a className="btn btn-primary py-3 px-5" href="/">More Services</a>
                </div>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light overflow-hidden h-100">
                        <img className="img-fluid" src="img/service-1.jpg" alt=""/>
                        <div className="service-text position-relative text-center h-100 p-4">
                            <h5 className="mb-3">Building Construction</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <a className="small" href="/">READ MORE<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light overflow-hidden h-100">
                        <img className="img-fluid" src="img/service-2.jpg" alt=""/>
                        <div className="service-text position-relative text-center h-100 p-4">
                            <h5 className="mb-3">Home Maintainance</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <a className="small" href="/">READ MORE<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light overflow-hidden h-100">
                        <img className="img-fluid" src="img/service-3.jpg" alt=""/>
                        <div className="service-text position-relative text-center h-100 p-4">
                            <h5 className="mb-3">Renovation and Painting</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <a className="small" href="/">READ MORE<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light overflow-hidden h-100">
                        <img className="img-fluid" src="img/service-4.jpg" alt=""/>
                        <div className="service-text position-relative text-center h-100 p-4">
                            <h5 className="mb-3">Wiring and installation</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <a className="small" href="/">READ MORE<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light overflow-hidden h-100">
                        <img className="img-fluid" src="img/service-5.jpg" alt=""/>
                        <div className="service-text position-relative text-center h-100 p-4">
                            <h5 className="mb-3">Tiling and Painting</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <a className="small" href="/">READ MORE<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light overflow-hidden h-100">
                        <img className="img-fluid" src="img/service-6.jpg" alt=""/>
                        <div className="service-text position-relative text-center h-100 p-4">
                            <h5 className="mb-3">Interior Design</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <a className="small" href="/">READ MORE<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Service End */}


    {/* Appointment Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="border-start border-5 border-primary ps-4 mb-5">
                        <h6 className="text-body text-uppercase mb-2">Appointment</h6>
                        <h1 className="display-6 mb-0">A Company Involved In Service And Maintenance</h1>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                </div>
                <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-light border-0" id="gname" placeholder="Gurdian Name"/>
                                    <label for="gname">Your Name</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email"/>
                                    <label for="gmail">Your Email</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-light border-0" id="cname" placeholder="Child Name"/>
                                    <label for="cname">Your Mobile</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-light border-0" id="cage" placeholder="Child Age"/>
                                    <label for="cage">Service Type</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control bg-light border-0" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Get Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* Appointment End */}

    <Footer/>
    </>
  )
}
