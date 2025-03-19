import { Box, Container, SxProps, Theme } from "@mui/material"
import { useMemo } from "react"

type TSection = {
    children: React.ReactNode,
    sx?: SxProps<Theme>,
    withOverlay?: boolean
}


const sectionOverlaySx: SxProps<Theme> = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1
}

const containerSx: SxProps<Theme> = {
    position: "relative",
    zIndex: 2
}


export const SectionOverlay: React.FC = props => <Box sx={sectionOverlaySx} />

const Section: React.FC<TSection> = props => {
    const { children, sx, withOverlay = false } = props

    const resolvedSectionSx = useMemo<SxProps<Theme>>(() => {
        return Object.assign({ position: "relative", padding: "3.75rem 0" }, sx ? { ...sx } : {})
    }, [sx])

    return <Box component="section" sx={resolvedSectionSx}>
        {withOverlay ? <SectionOverlay /> : null}
        <Container maxWidth="lg" sx={containerSx}>
            {children}
        </Container>
    </Box>
}

export default Section