import { Grid2, SxProps, Theme } from "@mui/material"
import aboutPic from "@/assets/about.webp"
import Image from "next/image"
import React, { CSSProperties } from "react"
import Section from "@/components/Section"
import SectionTitle from "@/components/SectionTitle"
import Accordion from "@/components/Accordion"
import accordions from "@/mock/accordions.json"

const imageContainerSx: SxProps<Theme> = {
    position: "relative",
    minHeight: "435px",
    marginBottom: { xs: "1rem", md: 0 }
}

const accordionContainerSx: SxProps<Theme> = { padding: "0 .9rem" }


const imageStyle: CSSProperties = { objectFit: "cover" }


const Features: React.FC = props => {
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                    title="Amazing features"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} sx={imageContainerSx}>
                <Image alt="some image" src={aboutPic} fill sizes="100%" style={imageStyle} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} sx={accordionContainerSx}>
                <Accordion accordions={accordions} />
            </Grid2>

        </Grid2>
    </Section>
}

export default Features