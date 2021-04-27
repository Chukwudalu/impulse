import Styled from 'styled-components';

export const StyledLanguages = Styled.section`
    
    .container{
        width: 90%;
        margin: 0 auto;
        padding: 15px 0 15px 250px
    }

    .text{
        text-align: center;
        color: var(--primary-color);
    }
    .grid{
        column-gap: 30px
    }

    @media(max-width: 768px){
        .container{
            padding-left: 96px
        }
    }

    @media(max-width: 500px){
        .grid{
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px
        }
        .img{
            padding-right: 70px
        }
    }
   
`