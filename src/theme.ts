import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
    fontFamily: "'Nunito Sans', sans-serif",
    h1: {
        fontWeight: 800,
    },
    h2: {
        fontWeight: 600,
    },
    body1: {
        fontWeight: 300,
    },
};

const theme = createTheme({
    typography,
} as ThemeOptions);

export default theme;
