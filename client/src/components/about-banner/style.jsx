import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BannerBox = styled(Box)(({imgurl}) => ({
    // border: '2px solid red',
    width: '100vw',
    // minHeight: '36vw',
    // aspectRatio: '3750/381',
    // backgroundImage: `url(${imgurl})`,
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // padding: '2rem',

    '.banner-text': {
        // border: '2px solid blue',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'black',
    },
    '.banner-para': {
        width: '60%',
        fontSize: '1.2rem',
        letterSpacing: '1.15px',
        wordSpacing: '2px',
        paddingTop: '1rem',
    },

    '@media (max-width: 800px)': {
        alignItems: 'center',
        '.banner-para': {
            width: '100%',
        }
    }
}));