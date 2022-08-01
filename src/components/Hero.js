import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [color, setColor] = useState();

    return (
        <section className="hero p-5 text-center">
            <div className="container-fluid">
                <div className="col-12">
                    <h4 className='fs-5 mt-4'>iPhone 12 and iPhone 12 mini</h4>
                    <h4 className='hero-headline'>Blast past fast.</h4>
                    <div className='d-flex justify-content-center'>
                        <h6 className='hero-intro w-50 fst-normal'>A super-powerful chip. An advanced dual‑camera system.A Ceramic Shield front that’s tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes.</h6>
                    </div>
                    <h6 className='hero-pricing my-2'>From ₹59900.00* before trade‑in</h6>
                    <button className='btn btn-primary rounded-pill mt-4 mb-5 fs-5 px-4'>Buy</button>
                </div>
                <div className='col-12 mt-5'>
                    <div className='d-flex justify-content-center mt-2  side-crop'>
                        {color ? '' : <img src="/hero_purple.jpg" className='w-75 img-fit' alt="img" />}
                        {color === 'purple' ? <img src="/hero_purple.jpg" className='w-75 img-fit' alt="img" /> : ''}
                        {color === 'blue' ? <img src="/hero_blue.jpg" className='w-75 img-fit' alt="img" /> : ''}
                        {color === 'green' ? <img src="/hero_green.jpg" className='w-75 img-fit' alt="img" /> : ''}
                        {color === 'red' ? <img src="/hero_red.jpg" className='w-75 img-fit' alt="img" /> : ''}
                        {color === 'white' ? <img src="/hero_white.jpg" className='w-75 img-fit' alt="img" /> : ''}
                        {color === 'black' ? <img src="/hero_black.jpg" className='w-75 img-fit' alt="img" /> : ''}
                    </div>
                    <div className='col-lg-6 col-12 mt-5 p-5 color-scrum'>
                        <div className='container-fluid d-flex ms-5'>
                            <label class="container">{color === 'purple' ? <h6>Purple</h6> : ''}
                                <input type="radio" name="radio" value='purple' onClick={(e) => { setColor(e.target.value) }} />
                                <span class="checkmark-purple"></span>
                            </label>
                            <label class="container">{color === 'blue' ? <h6>Blue</h6> : ''}
                                <input type="radio" name="radio" value='blue' onClick={(e) => { setColor(e.target.value) }} />
                                <span class="checkmark-blue"></span>
                            </label>
                            <label class="container">{color === 'green' ? <h6>Green</h6> : ''}
                                <input type="radio" name="radio" value='green' onClick={(e) => { setColor(e.target.value) }} />
                                <span class="checkmark-green"></span>
                            </label>
                            <label class="container">{color === 'red' ? <h6 style={{ 'color': '#b41f23' }}>(Product)<sup>Red</sup></h6> : ''}
                                <input type="radio" name="radio" value='red' onClick={(e) => { setColor(e.target.value) }} />
                                <span class="checkmark-red"></span>
                            </label>
                            <label class="container mx-2">{color === 'white' ? <h6>White</h6> : ''}
                                <input type="radio" name="radio" value='white' onClick={(e) => { setColor(e.target.value) }} />
                                <span class="checkmark-white"></span>
                            </label>
                            <label class="container">{color === 'black' ? <h6>Black</h6> : ''}
                                <input type="radio" name="radio" value='black' onClick={(e) => { setColor(e.target.value) }} />
                                <span class="checkmark-black"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;