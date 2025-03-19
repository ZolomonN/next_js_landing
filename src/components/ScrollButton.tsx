"use client"
import { Fab, SxProps, Theme, Zoom } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useScroll from "@/helpers/useScroll";
import React from "react";

const fabSx: SxProps<Theme> = {
    position: "fixed",
    bottom: 16,
    right: 16
}


const handleButtonClick = () => window.scrollTo({ top: 0, behavior: "smooth" })


const ScrollButton: React.FC = props => {

    const isPageScrolled = useScroll()

    return <Zoom
        in={isPageScrolled}
        timeout={{ enter: 300, exit: 300 }}
        unmountOnExit
    >
        <Fab
            sx={fabSx}
            color="primary"
            aria-label="page up"
            onClick={handleButtonClick}
        >
            <ArrowUpwardIcon />
        </Fab>
    </Zoom>
}

export default ScrollButton