import React from 'react';
import styled from 'styled-components'
import {StyledStat} from './stats.styles'

const Stats = () => {
    return (
        <StyledStat>
            <div className='title'>
                <h3>The priority is efficiency and productivity</h3>
            </div>
            <div className='stats grid grid-3'>
                <div>
                    <i class="fas fa-download fa-3x"></i>
                    <h3>10,000,000</h3>
                    <p>Downloads</p>
                </div>
                <div>
                    <i class="fas fa-project-diagram fa-3x"></i>
                    <h3>5,453,788</h3>
                    <p>Projects</p>
                </div>
                <div>
                    <i class="fas fa-upload fa-3x"></i>
                    <h3>987 TB</h3>
                    <p>Published</p>
                </div>
            </div>
        </StyledStat>
    )
}


export default Stats