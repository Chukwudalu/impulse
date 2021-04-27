import styled from 'styled-components';
export const HeroSection = styled.section`
    background: var(--primary-color);
    height: 340px;
    width: 100vw;
    .container{
        width: 90%;
        margin: 0 auto;
        gap: 80px;
        overflow: visible;
        padding: 0 10px;

    }

    .container-text h2{
        color: #b8b08d;
    }
    .container-text p{
        color: white
    }

    .showcase-form{
        width: 400px;
        height: 300px;
        position: relative;
        top: 45px;
    }

    .showcase-form h4{
        font-size: 1.8rem;
    }

    .form-control{
        margin: 15px 0
    }

    .form-control input[type='text'],
    .form-control input[type='email']{
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
    }

    

    @media(max-width: 1040px){
        &{
            height: 600px;
        }
        .container{
            grid-template-columns: 1fr;
        }
        .container-text{
            text-align: center
        }
        .showcase-form{
            top: -40px;
            justify-self: center
        }

    }

    @media(max-width:500px){
        &{
            height: 600px;
        }
        .container{
            grid-template-columns: 1fr;

            .container-text h2, p{
                text-align: center
            }
        }

        .showcase-form{
            top: -20px
        }
    }


`