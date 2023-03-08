import styled from "@emotion/styled";
import { Box } from "@mui/material";
import BannerImg from '../../assets/img.jpg';

export const BannerBox = styled(Box)({
    // border: '2px solid red',
    height: '50vh',
    backgroundImage: `url(${BannerImg})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '2rem',

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
});