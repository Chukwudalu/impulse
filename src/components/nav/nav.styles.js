import styled from 'styled-components';


export const StyledHeader = styled.header`
    background-color: var(--primary-color);
    height: 85px;
    .nav-container{
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        nav a{
            color: white;
            text-decoration: none;

            &:hover{
                border-bottom: 2px solid #b8b08d;
            }

            &:focus{
                color: #b8b08d;
            }
        }

        a{
            color: #fff;
            text-decoration: none;
            padding: 0 1rem;
        }
        ul{
            list-style: none;
            display: flex;
            align-items: center
        }

        
    }

    @media(max-width: 500px){
        &{
            height: 110px;
        }

        & .nav-container{
            flex-direction: column;
        }

        ul{
            margin: 0.5rem auto;
            background-color: rgba(0,0,0,0.1);
            padding: 0.5rem 0.5rem;
            margin-top: 0
        }
       
    }

    
`