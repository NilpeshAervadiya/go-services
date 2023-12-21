import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'

export default function Testimonial() {
  return (
    <>
    <Navbar/>
            {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-4 text-white animated slideInDown mb-4">Testimonial</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="/">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Testimonial Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="border-start border-5 border-primary ps-4 mb-5">
                        <h6 class="text-body text-uppercase mb-2">Testimonial</h6>
                        <h1 class="display-6 mb-0">What Our Happy Clients Say!</h1>
                    </div>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="row g-4">
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center mb-2">
                                <i class="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                                <h1 class="ms-3 mb-0">123+</h1>
                            </div>
                            <h5 class="mb-0">Happy Clients</h5>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center mb-2">
                                <i class="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                                <h1 class="ms-3 mb-0">123+</h1>
                            </div>
                            <h5 class="mb-0">Projects Done</h5>
                        </div>
                    </div>
                </div>
                {/* <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="owl-carousel testimonial-carousel">
                        <div class="testimonial-item">
                            <img class="img-fluid mb-4" src="img/testimonial-1.jpg" alt=""/>
                            <p class="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <div class="bg-primary mb-3" style={{width: "60px" , height: "5px"}}></div>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div class="testimonial-item">
                            <img class="img-fluid mb-4" src="img/testimonial-2.jpg" alt=""/>
                            <p class="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <div class="bg-primary mb-3" style={{width: "60px" , height: "5px"}}></div>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div> */}
                      <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="testimonial-item">
                                <img className="img-fluid mb-4" src="img/testimonial-1.jpg" alt="/" />
                                <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                <div className="bg-primary mb-3" style={{ width: 60, height: 5 }} />
                                <h5>Client Name</h5>
                                <span>Profession</span>
                            </div>
                            
                        </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}
    <Footer/>
    </>
  )
}
