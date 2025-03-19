"use client"
import { styled, Grid2 } from "@mui/material"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import logoPic1 from "@/assets/client1.webp";
import logoPic2 from "@/assets/client2.webp";
import logoPic3 from "@/assets/client3.webp";
import logoPic4 from "@/assets/client4.webp";
import Section from "@/components/Section"
import SectionTitle from "@/components/SectionTitle"
import { CSSProperties } from "react"

const imageStyle: CSSProperties = {
    width: "40%",
    objectFit: "contain"
}


const Carousel = styled("div")({ overflow: "hidden" })

const CarouselContainer = styled("div")({ display: "flex" })

const CarouselSlide = styled("div")({
    flex: "0 0 calc(100%/4 - 1rem)",
    minWidth: 0,
    marginRight: "1rem"
})

const CarouselSlideContainer = styled("div")({
    textAlign: "center",
    padding: "1.25rem",
    border: "1px solid var(--mui-palette-divider)",
    opacity: .8,
    transition: ".3s",
    "&:hover": {
        borderColor: "var(--mui-palette-primary-main)",
        opacity: 1
    }
})


const clientsList = [
    { logo: logoPic1 }, { logo: logoPic2 }, { logo: logoPic3 }, { logo: logoPic4 },
    { logo: logoPic1 }, { logo: logoPic2 }, { logo: logoPic3 }, { logo: logoPic4 }
]


const Clients: React.FC = props => {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay()])
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                    title="Our client"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            <Grid2 size={12}>
                <Carousel ref={emblaRef}>
                    <CarouselContainer>
                        {clientsList.map((item, index) => <CarouselSlide key={index}>
                            <CarouselSlideContainer>
                                <Image src={item.logo} alt={`client ${index + 1} logo`} style={imageStyle} />
                            </CarouselSlideContainer>
                        </CarouselSlide>)}
                    </CarouselContainer>
                </Carousel>
            </Grid2>
        </Grid2>
    </Section>
}

export default Clients