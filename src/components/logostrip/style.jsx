import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LogoStripBox = styled(Box)({
    padding: "0.5em 2em",

    '.logo-div': {
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '0.8em',
    },
    '.logo-img': {
        height: '50px',
    },
    '@media (max-width: 600px)': {
        '.breakpont-hidden': {
            display: 'none',
        }
    }
});