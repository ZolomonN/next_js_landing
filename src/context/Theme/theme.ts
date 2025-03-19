import { Montserrat } from 'next/font/google';
import { alpha, createTheme } from '@mui/material/styles';


const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class"
    },
    palette: {
        primary: {
            main: '#FC5A41',
            light: alpha('#FC5A41', 0.08)
        }
    },
    typography: {
        fontFamily: montserrat.style.fontFamily,
    },
})

export default theme