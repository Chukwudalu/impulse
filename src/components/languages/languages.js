import React from 'react';

import {StyledLanguages} from './languages.styles'

const Languages = () => {
    return (
        <StyledLanguages>
            <div className='text my-1'><h3>Supported Languages</h3></div>
            <div className='container grid'>
                <div className='images'>
                    <i class="fab fa-js-square fa-10x img"></i>
                </div>
                <div className='images'>
                    <i class="fab fa-python fa-10x img"></i>
                </div>
                <div className='images'>
                    <i class="fab fa-java fa-10x img"></i>
                </div>
                <div className='images'>
                    <i class="fab fa-node fa-10x img"></i>
                </div>
            </div>
        </StyledLanguages>
    )
}


export default Languages;