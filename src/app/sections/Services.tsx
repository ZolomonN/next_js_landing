"use client"
import { Android, BusinessCenter, Code, ContentPaste, EmojiObjects, PhotoCamera } from "@mui/icons-material"
import { Paper, Typography, Grid2, SxProps, Theme, styled, SvgIconTypeMap } from "@mui/material"
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"
import { OverridableComponent } from "@mui/material/OverridableComponent"

type TCard = {
    title: string,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string },
    description: string
}


const titleSx: SxProps<Theme> = {
    margin: ".9rem 0 .625rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "600",
    textTransform: "uppercase",
    color: "inherit",
    lineHeight: 1.1
}

const descriptionSx: SxProps<Theme> = {
    fontSize: ".9rem",
    color: "text.primary"
}


const StyledPaper = styled(Paper)({
    padding: "1.875rem",
    transition: "all .5s",
    border: "1px solid var(--mui-palette-divider)",
    textAlign: "center",
    "&:hover": {
        transform: "translateY(-10%)",
        boxShadow: "0px 40px 40px rgba(0,0,0,0.1)",
        color: "var(--mui-palette-primary-main)"
    }
})


const services = [
    { title: "APPS DEVELOPMENT", Icon: Android, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, autem amet. Labore eos cum at, et illo ducimus." },
    { title: "CREATIVE DESIGN", Icon: Code, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, autem amet. Labore eos cum at, et illo ducimus." },
    { title: "OUTSOURCE BFX", Icon: BusinessCenter, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, autem amet. Labore eos cum at, et illo ducimus." },
    { title: "PHOTOGRAPHY", Icon: PhotoCamera, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, autem amet. Labore eos cum at, et illo ducimus." },
    { title: "MARKETING PLAN", Icon: ContentPaste, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, autem amet. Labore eos cum at, et illo ducimus." },
    { title: "CREATIVE IDEA", Icon: EmojiObjects, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, autem amet. Labore eos cum at, et illo ducimus." }
]


const Card: React.FC<TCard> = props => {
    const { title, description, Icon } = props
    return <Grid2 size={{ xs: 12, md: 4 }}>
        <StyledPaper>
            <Icon fontSize="large" color="primary" />
            <Typography component="h4" sx={titleSx} >{title}</Typography>
            <Typography sx={descriptionSx}>{description}</Typography>
        </StyledPaper>
    </Grid2>
}

const Services: React.FC = props => {
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                    title="Our service"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            <Grid2 size={12} container spacing={4}>
                {services.map(service => <Card key={service.title} {...service} />)}
            </Grid2>
        </Grid2>
    </Section>
}

export default Services