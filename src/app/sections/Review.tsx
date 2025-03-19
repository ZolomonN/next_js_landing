"use client"
import { styled, Typography, Grid2, SxProps, Theme } from "@mui/material"
import Image from "next/image"
import clientPic from "@/assets/client.webp"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CSSProperties, useCallback, useEffect, useState } from "react"
import { EmblaCarouselType } from 'embla-carousel'
import Section from "../../components/Section"
import SectionTitle from "../../components/SectionTitle"

const SectionSx: SxProps<Theme> = {
    backgroundImage: `url(./workspace.jpg)`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    color: "primary.contrastText"
}

const ContentContainerSx: SxProps<Theme> = { margin: "0 auto" }

const authorNameSx: SxProps<Theme> = {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.1,
    margin: "1.25rem 0 .5rem"
}

const authorJobTitleSx: SxProps<Theme> = {
    textAlign: "center",
    textTransform: "uppercase"
}

const authorReviewSx: SxProps<Theme> = {
    fontSize: ".9rem",
    marginBottom: "1rem",
    textAlign: "center"
}

const imageStyle: CSSProperties = {
    width: "130px",
    height: "auto",
    margin: "0 auto",
    borderRadius: "50%"
}


const Carousel = styled("div")({ overflow: "hidden" })

const CarouselContainer = styled("div")({ display: "flex" })

const CarouselSlide = styled("div")({ flex: "0 0 100%", minWidth: 0 })

const CarouselDotsContainer = styled("div")({ display: "flex", justifyContent: "center" })

const CarouselDot = styled("div")<{ isActive: boolean }>((props) => ({
    width: props.isActive ? "10px" : "20px",
    height: "10px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "currentcolor",
    borderRadius: ".625rem",
    margin: "0 .2rem",
    transition: "all .25s ease-in-out",
    backgroundColor: props.isActive ? "currentcolor" : "transparent"
}))

const AuthorContainer = styled("div")({
    marginBottom: "1.875rem",
    textAlign: "center"
})


const reviewsArray = new Array(3).fill(0)


const Review: React.FC = props => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return <Section sx={SectionSx} withOverlay>
        <Grid2 container>
            <Grid2 size={12}  >
                <SectionTitle
                    title="Clients review"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} sx={ContentContainerSx}>
                <Carousel ref={emblaRef}>
                    <CarouselContainer>
                        {reviewsArray.map((item, index) => <CarouselSlide key={index}>
                            <AuthorContainer>
                                <Image src={clientPic} alt="review avatar" style={imageStyle} />
                                <Typography component="h5" sx={authorNameSx}>Jhon Stalker</Typography>
                                <Typography component="span" sx={authorJobTitleSx}>ceo</Typography>
                            </AuthorContainer>
                            <Typography sx={authorReviewSx}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At tempora cumque delectus nam obcaecati consectetur ad dolorum neque dolores nemo!
                            </Typography>
                        </CarouselSlide>)}
                    </CarouselContainer>
                </Carousel>
                <CarouselDotsContainer>
                    {scrollSnaps.map((item, index) => <CarouselDot isActive={index === selectedIndex} key={index} onClick={() => emblaApi?.scrollTo(index)} />)}
                </CarouselDotsContainer>
            </Grid2>

        </Grid2>
    </Section>
}

export default Review