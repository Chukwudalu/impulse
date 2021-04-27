import styled from 'styled-components'

export const StyledStat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 70px auto;

    .stats{
        margin-top: 30px
    }
    .stats p{
        color: var(--dark-color);
    }

    @media(max-width: 500px){
        &{
            margin-top: 120px
        }

        & .title{
            text-align: center
        }
                                        
        & .stats{
            grid-template-columns: 1fr;
            text-align: center
        }
    }

    @media(max-width: 768px){
        & .title, & .stats{
            text-align: center
        }
    }
`
