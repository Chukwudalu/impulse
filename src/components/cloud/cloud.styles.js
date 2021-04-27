import styled from 'styled-components';

export const StyledCloud = styled.section`
    background-color: var(--primary-color);
    height: 200px;
    .container{
        width: 90%;
        margin: 0 auto;
        color: white;
        padding-top: 30px
    }

    .img{
        margin-left: 80px
    }
    /* .text h3{
        margin-bottom: 3px
    } */

    @media(max-width:768px){
        &{
            height: 430px
        }
        .grid{
            grid-template-columns: 1fr;
            gap: 5px;
            text-align: center;
        }
        .img{
            padding-right: 60px
        }

        
}

`