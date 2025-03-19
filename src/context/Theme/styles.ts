import { Interpolation, Theme } from "@mui/material";

const styles: Interpolation<Theme> = {
    "body": {
        margin: 0,
        fontFamily: "'Montserrat','Montserrat Fallback'"
    },
    ":root": {
        "--app-main-color": "#f6534a",
        "--app-dark-color": "#1e1e2d",
        "--app-light-color": "#fff",
        "--app-background-color": "#f5f8fa"
    },
}

export default styles