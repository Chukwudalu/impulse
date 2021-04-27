import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

    :root{
        --primary-color: #283845;
        --dark-color: #202c39;
        --light-color: #b8b08d;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        /* line-height: 1.6; */
    }

    h2{
        font-size: calc(2rem + 1vw);
        font-family: 'Cormorant Garamond', serif; 
    }

    h3{
        font-size: calc(1.8rem + 1vw);
        font-family: 'Cormorant Garamond', serif; 
    }

    p{
        font-size: calc(1rem + 1vw);
    }

    a{
        text-decoration: none
    }

    

    /* Buttons */
    .btn{
        padding: 10px 30px;
        background: var(--primary-color);
        font-family: 'Old Standard TT', serif;
        cursor: pointer;
        border: none;
        border-radius: 20px;
        color: white;
        display: inline-block;

        &:hover{
            transform: scale(0.98)
        }
    }

    .btn-outline{
        background: transparent;
        border: 1px solid #fff;
    }

    /* Grid */
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 100px;
        height: 100%
    }

    .grid-3{
        grid-template-columns: repeat(3, 1fr);
    }

    /* Cards */
    .card{
        color: #333;
        padding: 30px;
        margin: 10px;
        background-color: white;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        border-radius: 10px
    }

    .form{

    }

    /* margin */
    .my-1{
        margin: 1rem 0;
    }
    .my-2{
        margin: 1.5rem 0;
    }
    .my-3{
        margin: 2rem 0;
    }
    .my-4{
        margin: 3rem 0;
    }
    .my-5{
        margin: 4rem 0;
    }

    .m-1{
        margin: 1rem;
    }
    .m-2{
        margin: 1.5rem;
    }
    .m-3{
        margin: 2rem;
    }
    .m-4{
        margin: 3rem;
    }
    .m-5{
        margin: 4rem;
    }

    /* padding */
    .py-1{
        padding: 1rem 0;
    }
    .py-2{
        padding: 1.5rem 0;
    }
    .py-3{
        padding: 2rem 0;
    }
    .py-4{
        padding: 3rem 0;
    }
    .py-5{
        padding: 4rem 0;
    }

    .p-1{
        padding: 1rem;
    }
    .p-2{
        padding: 1.5rem;
    }
    .p-3{
        padding: 2rem;
    }
    .p-4{
        padding: 3rem;
    }
    .p-5{
        padding: 4rem
    }



`

export default GlobalStyles;

