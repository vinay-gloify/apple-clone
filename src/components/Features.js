import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features p-3">
            <div className="first-container mt-5 rounded-3">
                <div className='row'>
                    <div class="col-4">
                        <h1 className="two-sizes ms-4 fw-bold">Two just‑right sizes.</h1>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <img src="/two_sizes.jpg" className='ms-5' alt="img" />
                    </div>
                    <div class="col-2 d-flex align-items-end flex-column">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#02090f" className="bi bi-plus-circle mt-auto mb-4 me-5" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='second-container mt-4'>
                <div className="row second">
                    <div className="col-8">
                        <video src="/large.mp4" className="anime w-100" loop controls autoplay=''></video>
                        <div className="context1 d-flex justify-content-between ms-4" >
                            <span>
                                <h1 className='text-white fs-1'>A fast and <br /> powerful chip.</h1>
                            </span>
                            <span className='me-4 mt-5 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#ffffff" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <img src="/battery_life.jpg" className='w-100 battery' alt="img" />
                        <div className="context2 d-flex justify-content-between ms-3" >
                            <span>
                                <h1 className='text-white fs-1'>Great <br /> battery life.</h1>
                            </span>
                            <span className='mt-5 me-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#ffffff" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='third-container'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <img src="/design_endframe.jpg" className='w-100 h-75 flaw' alt="img" /> */}
                        <figure className='image-end-frame'></figure>
                        <div className='d-flex justify-content-between flawless'>
                            <span className='ms-5 flat '>
                                <h1>A flawless flat‑edge design.</h1>
                            </span>
                            <span className='me-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="black" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fourth-container'>
                <div className='row'>
                    <div className='col-12'>
                        <figure className='image-features-camera'></figure>
                        <div className='d-flex justify-content-between night'>
                            <span>
                                <h1 className='text-white adv ms-5'>Advanced dual-camera system with <br />
                                    Night mode selfies.
                                </h1>
                            </span>
                            <span className='me-5 mt-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#fff" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fifth-container container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='shield img-fluid'>
                            <div className='d-flex justify-content-around combine'>
                                <span className='shield-text'>
                                    <h1 className='text-white fw-semibold'>A remarkably durable <br /> Ceramic Shield front.</h1>
                                </span>
                                <span className='shield-svg mt-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#fff" className="bi bi-plus-circle mt-3" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 right-img'>
                        <div className='brilliant img-fluid'>
                            <div className='d-flex justify-content-center'>
                                <span className='bright-text mb-5'>
                                    <h1 className='fw-semibold'>A bright, beautiful <br /> OLED display.</h1>
                                </span>
                                <span className='bright-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#black" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sixth-container container-fluid  ms-3">
                <div className="row">
                    <span className="magsafe-head">
                        <h1 className='fw-semibold ms-5 p-3'><span className="ms-5">MagSafe.</span><br /><span className="ms-4">Snap on the </span><br /><span className="me-4">perfect accessory.</span></h1>
                    </span>
                    <div className='col-4 left-mag'>
                        <div className='magfast img-fluid w-100 h-50'>
                            <span className='magsafe-svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#black" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='col-8'>
                        <video src="/skate.mp4" className="skate w-100" loop controls autoplay="" muted></video>
                        <div className="context3 d-flex justify-content-between ms-4" >
                            <span>
                                <h1 className='text-white fs-1 skate-text'>Dolby Vision recording <br />  with 700 million <br /> colours.</h1>
                            </span>
                            <span className='me-4 mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#ffffff" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="seventh-container container-fluid p-2">
                <div className="row">
                    <div className='col-12'>
                        <video src="/water.mp4" className="skate w-100" loop controls autoplay="" muted></video>
                        <div className="context3 d-flex justify-content-between ms-4" >
                            <span>
                                <h1 className='text-white fs-1 oops-text text-center'>Oops resistant.</h1>
                            </span>
                            <span className='me-4 mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="#ffffff" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;