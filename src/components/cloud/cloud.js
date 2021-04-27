import React from 'react'
import { Link } from 'react-router-dom'
import {StyledCloud} from './cloud.styles'

const Cloud = () => {
    return (
        <StyledCloud>
            <div className='container grid'>
                <i class="fas fa-cloud-upload-alt fa-10x img"></i>
                <div className='text'>
                    <h3 className='my-1'>Easy to deploy to the cloud</h3>
                    <Link className='btn btn-outline'>Learn More</Link>
                </div>
            </div>
        </StyledCloud>
    )
}

export default Cloud