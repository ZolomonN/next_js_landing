"use client"
import { Paper, Typography, Grid2, styled, SxProps, Theme } from "@mui/material"
import aboutPic from "@/assets/about.webp"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Section from "../../components/Section"
import { CSSProperties } from "react"
import SectionTitle from "../../components/SectionTitle"

type TCard = {
    image: StaticImageData,
    title: string,
    body: string,
    author: string,
    date: string
}


const cardTitleSx: SxProps<Theme> = {
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: ".5rem",
    transition: ".5s",
    cursor: "pointer",
    "&:hover": {
        color: "primary.main"
    }
}

const cardBodySx: SxProps<Theme> = {
    fontSize: ".9rem",
    marginBottom: "1rem"
}

const cardPropsSx: SxProps<Theme> = {
    fontSize: ".9rem",
    paddingTop: ".75rem",
    borderTop: "1px solid var(--mui-palette-primary-main)",
}


const imageStyle: CSSProperties = { objectFit: "cover" }

const StyledGrid = styled(Grid2)({ padding: "0 .9rem" })

const CardContainer = styled(Paper)({ marginBottom: "3.75rem" })

const ImageContainer = styled("div")({
    position: "relative",
    height: "200px"
})

const CardContentContainer = styled("div")({
    padding: ".9rem",
    border: "1px solid var(--mui-palette-divider)"
})


const news = new Array(3).fill(0)


const Card: React.FC<TCard> = props => {
    const { image, title, body, author, date } = props
    return <StyledGrid size={{ xs: 12, md: 4 }}>
        <CardContainer elevation={0}>
            <ImageContainer>
                <Image src={image} fill sizes="100%" alt="news image" style={imageStyle} />
            </ImageContainer>
            <CardContentContainer>
                <Typography component="h5" sx={cardTitleSx}>{title}</Typography>
                <Typography sx={cardBodySx}>{body}</Typography>
                <Typography sx={cardPropsSx}>
                    By <Link href="#" style={{ textDecoration: "none" }}>{author}</Link> | {date}
                </Typography>
            </CardContentContainer>
        </CardContainer>
    </StyledGrid>
}

const News: React.FC = props => {
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                    title="Latest news"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            {news.map((item, index) => <Card
                key={`${item} - ${index}`}
                image={aboutPic}
                title="Lorem Ipsum Dolor Sit Amet."
                body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nihil, magni laborum rem consequatur obcaecati recusandae voluptates!"
                author="Jhon Doe"
                date="3 March 2018"
            />
            )}
        </Grid2>
    </Section>
}


export default News