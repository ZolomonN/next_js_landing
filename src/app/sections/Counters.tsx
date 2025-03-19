"use client"
import { Badge, DomainAdd, DoorFront, Group } from "@mui/icons-material"
import { SvgIconTypeMap, Grid2, SxProps, Theme, styled } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import React, { useEffect, useRef, useState } from "react"
import Section from "@/components/Section"

type TCounter = {
    title: string,
    count: number,
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
}


const sectionSx: SxProps<Theme> = {
    backgroundImage: `url(./workspace.jpg)`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
}


const CounterContainer = styled(Grid2)({
    color: "var(--mui-palette-primary-contrastText)",
    textAlign: "center"
})

const CounterValue = styled("h3")({
    fontSize: "2rem",
    fontWeight: 500,
    margin: ".67rem 0",
    lineHeight: 1.1
})

const CounterTitle = styled("p")({
    fontSize: "1.5rem",
    fontWeight: 500,
    margin: "0 0 .5rem"
})


const counters = [
    { Icon: Badge, title: "Employees", count: 300 },
    { Icon: Group, title: "Clients", count: 40000 },
    { Icon: DoorFront, title: "Visits", count: 15000 },
    { Icon: DomainAdd, title: "Branches", count: 80 },
]


const Counter: React.FC<TCounter> = props => {
    const { title, Icon, count } = props
    const [isVisible, setIsVisible] = useState(false)
    const [start, setStart] = useState(false)
    const [currentCount, setCurrentCount] = useState(0)
    const ref = useRef<HTMLDivElement | null>(null)

    const stepValue = React.useMemo(() => {
        const countLength = String(count).length - 1
        return countLength === 0 ? 1 : Number(new Array(countLength).fill(0).map((item, index) => {
            return index === 0 ? 1 : Math.ceil(Math.random() * 3)
        }).join(""))
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        })
        observer.observe(ref?.current as Element)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (isVisible && currentCount === 0) {
            setStart(true)
        }
    }, [isVisible])

    useEffect(() => {
        if (start) {
            const id = setInterval(() => {
                setCurrentCount(prev => {
                    const potentialValue = prev + stepValue
                    if (potentialValue < count) {
                        return potentialValue
                    } else {
                        setStart(false)
                        return count
                    }
                })
            }, 50)
            return () => clearInterval(id)
        }
    }, [start])

    return <CounterContainer ref={ref} size={{ xs: 6, md: 3 }}>

        {Icon ? <Icon fontSize="large" color="primary" /> : null}
        <CounterValue >{currentCount.toLocaleString()}</CounterValue>
        <CounterTitle>{title}</CounterTitle>

    </CounterContainer>
}

const Counters: React.FC = props => {
    return <Section sx={sectionSx} withOverlay>
        <Grid2 container spacing={2}>
            {counters.map(({ Icon, title, count }) => <Counter key={title} title={title} Icon={Icon} count={count} />)}
        </Grid2>
    </Section>
}


export default Counters