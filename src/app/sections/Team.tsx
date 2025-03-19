"use client"
import { IconButton, Typography, Grid2, styled, SxProps, Theme } from "@mui/material"
import Image from "next/image"
import docPic from "@/assets/doctor.png"
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material"
import Section from "../../components/Section"
import team from "@/mock/team.json"
import { CSSProperties } from "react"
import SectionTitle from "../../components/SectionTitle"

type TCard = {
    fio: string,
    post: string
}


const fioSx: SxProps<Theme> = {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.1,
    marginBottom: ".5rem"
}

const postSx: SxProps<Theme> = {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.1,
    marginBottom: ".5rem"
}

const socialNetworksContainerSx: SxProps<Theme> = { padding: ".625rem" }


const imageStyle: CSSProperties = { objectFit: "cover" }


const CardContainer = styled("div")({
    position: "relative",
    width: "100%",
    height: "255px",
    overflow: "hidden",
    "&:hover": {
        "&>div": {
            transform: "translateY(0)"
        }
    }
})

const CardDescription = styled("div")({
    position: "absolute",
    top: 0,
    right: 0,
    bottom: "35%",
    left: 0,
    transform: "translateY(-100%)",
    transition: ".5s",
    color: "var(--mui-palette-primary-contrastText)",
    backgroundColor: "var(--mui-palette-primary-main)",
    opacity: ".9"
})

const CardMainDescription = styled("div")({
    marginTop: "1.875rem",
    textAlign: "center"
})


const socialNetworks = [
    { title: "facebook", Icon: Facebook },
    { title: "twitter", Icon: Twitter },
    { title: "linkedin", Icon: LinkedIn }
]


const Card: React.FC<TCard> = props => {
    const { fio, post } = props
    return <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
        <CardContainer>
            <Image alt={`${fio}_avatar`} src={docPic} fill sizes="100%" style={imageStyle} />
            <CardDescription>
                <CardMainDescription>
                    <Typography component="h5" sx={fioSx}>{fio}</Typography>
                    <Typography component="h6" sx={postSx}>{post}</Typography>
                </CardMainDescription>
                <Grid2 container justifyContent="center" sx={socialNetworksContainerSx}>
                    {socialNetworks.map(({ title, Icon }) => <IconButton key={title} size="large" color="inherit">
                        <Icon fontSize="inherit" />
                    </IconButton>)}
                </Grid2>
            </CardDescription>
        </CardContainer>
    </Grid2>
}

const Team: React.FC = props => {
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                    title="Our team"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            <Grid2 size={12} container spacing={4}>
                {team.map((employee => <Card key={employee.id} {...employee} />))}
            </Grid2>
        </Grid2>
    </Section>
}

export default Team