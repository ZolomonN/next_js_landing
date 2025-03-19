"use client"
import { Box, Button, Container, styled, SxProps, Theme, Typography } from "@mui/material"
import Image from "next/image"
import mainPic from "@/assets/main.jpg"
import { SectionOverlay } from "@/components/Section"
import { CSSProperties } from "react"

const sectionSx: SxProps<Theme> = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: { md: "16.5rem 0 15.5rem", sm: "15.5rem 0 10.5rem", xs: "10.5rem 0 7.5rem" }
}

const titleSx: SxProps<Theme> = {
    fontSize: "2.625rem",
    fontWeight: 600,
    marginBottom: "1.25rem"
}

const coloredTitleSx: SxProps<Theme> = {
    fontSize: "inherit",
    fontWeight: "inherit",
    color: "primary.main"
}

const descriptionSx: SxProps<Theme> = {
    fontSize: "1rem",
    marginBottom: "1.25rem"
}

const buttonSx: SxProps<Theme> = { padding: ".9rem 1.25rem" }


const imageStyle: CSSProperties = { objectFit: "cover" }

const StyledContainer = styled(Container)({
    position: "relative",
    zIndex: 2,
    color: "var(--mui-palette-primary-contrastText)",
    textAlign: "center"
})

const Welcome: React.FC = props => {
    return <Box component="section" sx={sectionSx}>
        <SectionOverlay />
        <Image alt="welcome image" src={mainPic} fill sizes="100%" style={imageStyle} />
        <StyledContainer maxWidth="lg">
            <Typography component="h2" sx={titleSx}>
                Welcome To Get Start Your
                <Typography component="span" sx={coloredTitleSx}> Buisness</Typography>
            </Typography>
            <Typography component="h6" sx={descriptionSx}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod
            </Typography>
            <Button variant="contained" sx={buttonSx}>Learn more</Button>
        </StyledContainer>
    </Box>
}

export default Welcome