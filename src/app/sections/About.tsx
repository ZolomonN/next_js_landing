"use client"
import { Button, Typography, Grid2, styled, SxProps, Theme } from "@mui/material"
import aboutPic from "@/assets/about.webp"
import Image from "next/image"
import { CSSProperties } from "react"
import Section from "@/components/Section"
import SectionTitle from "@/components/SectionTitle"

const titleSx: SxProps<Theme> = {
    fontSize: "2rem",
    fontWeight: 500,
    marginBottom: ".5rem"
}

const contentContainerSx: SxProps<Theme> = {
    padding: "0 .9rem",
    marginBottom: { xs: "1rem", md: 0 }
}

const buttonSx: SxProps<Theme> = {
    padding: ".9rem 1.25rem"
}

const imageContainerSx: SxProps<Theme> = {
    position: "relative",
    minHeight: "360px"
}


const imageStyle: CSSProperties = { objectFit: "cover" }


const TextContent = styled("p")({
    fontSize: ".9rem",
    lineHeight: 1.7,
    marginBottom: "1rem",
    fontFamily: "inherit"
})



const About: React.FC = props => {
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                    title="About us"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} sx={contentContainerSx}>
                <Typography component="h3" sx={titleSx}>
                    Welcome To Tamai
                </Typography>
                <TextContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cum quam unde dolorum nesciunt eligendi, voluptatum perspiciatis expedita sequi reiciendis, quos soluta impedit ab officia!
                </TextContent>
                <TextContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minima reprehenderit non, est id dolorum nesciunt. Iure, nihil, beatae. Eveniet odio voluptatibus reprehenderit eum, temporibus nam quasi odit minus minima officiis. Illum sit, quasi similique explicabo incidunt perspiciatis possimus deserunt.
                </TextContent>
                <Button variant="contained" sx={buttonSx}>Contact us</Button>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} sx={imageContainerSx}>
                <Image alt="some image" src={aboutPic} fill sizes="100%" style={imageStyle} />
            </Grid2>
        </Grid2>
    </Section>
}

export default About