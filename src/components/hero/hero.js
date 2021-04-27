import React from 'react';
import { Link } from 'react-router-dom';
import {HeroSection} from './hero.styles.js'

const Hero = () => {
    return (
        <HeroSection>
            <div className='container grid'>
                <div className='container-text'>
                    <h2 className='my-2'>Faster Development</h2>
                    <p>Impulse is the worlds fastest and most efficient javascript
                    framework. Web and mobile development has never been easier.
                    </p>
                    <Link to='/' className='btn btn-outline my-2'>Learn More</Link>
                </div>
                
                <div class="showcase-form card">
                    <h4>Request a Demo</h4>
                    <form>
                        <div className="form-control">
                            <input type='text' name='name' placeholder="Name" required/>
                        </div>
                        <div className="form-control">
                            <input type='text' name='company' placeholder="Company Name" required/>
                        </div>
                        <div className="form-control">
                            <input type='email' name='email' placeholder="Email" required/>
                        </div>
                        <input type='submit' value='send' className='btn'/>
                    </form>
                </div>
                
            </div>
        </HeroSection>
    )
   
}


export default Hero;