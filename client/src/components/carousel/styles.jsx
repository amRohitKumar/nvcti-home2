import {styled} from '@mui/system';

export const CarouselWrapper = styled('div')({
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.carousel-div': {
        // border: '5px solid yellow',
        width: '100%',
        height: '90vh',
        // padding: '1em 1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

        '@media (max-width: 600px)': {
            width: '100%',
        }
    }
    
});


export const CarouselItemWrapper = styled('div')(({imageUrl, isLarge}) => `
    /* border: 5px solid blue; */
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;
    width: 100vw;
    height: 90vh ;
    /* border: 2px solid red; */
    
    .content{
        /* opacity: 0;         */
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        color: white;
        padding: 2rem 2rem;
        background: linear-gradient(hsl(0 0% 0% / 0), hsl(0 0% 0% / 0.3) 20%,hsl(0 0% 0% / 100));
        transition: all liner 1000ms;

        .carousel-heading{
            font-size: 3rem;
            font-weight: bold;
        }
        .carousel-para{
            font-size: 1.35rem;
            letter-spacing: 1.25px;
        }

    }
    
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${imageUrl});
        z-index: -1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: var(--transition);
    }
    
    /* &:hover{
        .content{
            opacity: 1;
        }
    } */

    @media (max-width: 1000px){
        height: 400px;
    }
    @media (max-width: 700px){
        height: 300px;
    }
    @media (max-width: 500px){
        height: 200px;
    }
`);