import React from 'react';
import './Iphone.css';

const Iphone = () => {
    return (
        <section className="only-iphone">
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center mt-5 py-5 no-iphone'>There’s no phone like iPhone.</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='d-flex justify-content-around'>
                                <div>
                                    <span>
                                        <img src="/icon_privacy.jpg" alt="img" />
                                    </span>
                                    <span>
                                        <h2 className='text-start fw-bold fs-1 my-3'>Protects your privacy.</h2>
                                        <p className='text-break me-5 fw-normal'>iPhone helps put you in control of your personal information. For example, when you’re browsing, Safari intelligently helps block trackers from profiling you and shows you which ones have been blocked in your Privacy Report. And the list goes on. Learn more about Apple and privacy</p>
                                    </span>
                                    <span>
                                        <a href="/" className='fs-5'>Learn more about Apple and privacy <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg></a>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="/icon_works.jpg" alt="img" />
                                    </span>
                                    <span>
                                        <h2 className='text-start fw-bold fs-1 my-3'>Everything just works.</h2>
                                        <p className='text-break me-5 fw-normal'>Our hardware and software work together seamlessly. Want to pair new AirPods with your iPhone? It’s a simple one‑tap setup. Want to share photos, videos or contacts with friends nearby? AirDrop lists their names onscreen, so you can choose with a tap.</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-5'>
                            <div className='d-flex justify-content-around mt-5'>
                                <div>
                                    <span className='mt-5'>
                                        <img src="/icon_durable.jpg" alt="img" />
                                    </span>
                                    <span>
                                        <h2 className='text-start fw-bold fs-1 my-3'>Designed to last.</h2>
                                        <p className='text-break me-5 fw-normal'>Super-strong materials and water resistance make iPhone incredibly durable. And automatic iOS updates deliver new features and security enhancements that keep your iPhone running beautifully and help it hold its value longer than other smartphones.</p>
                                    </span>
                                </div>
                                <div className='ms-5'>
                                    <span className='ms-5'>
                                        <img src="/icon_environment.jpg" alt="img" />
                                    </span>
                                    <span>
                                        <h2 className='text-start fw-bold fs-1 my-3 ms-5'>Lighter on the planet.</h2>
                                        <p className='text-break me-5 fw-normal ms-5'>Our stores, offices, data centres and operations are already carbon neutral. By 2030 our products — and your carbon footprint from using them — will be, too. And this year we eliminated the plastic wrap around the iPhone 13 and iPhone 13 Pro boxes, saving 600 metric tons of plastic.</p>
                                    </span>
                                    <span>
                                        <a href="/" className='fs-5 ms-5'>Learn more about Apple and the environment<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Iphone;