"use client"
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, SxProps, Theme, Typography } from "@mui/material"
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material"
import { useState } from "react"

type TAccordion = { accordions: Array<{ id: number, title: string, body: string }> }


const accordionIconSx: SxProps<Theme> = {
    color: "primary.contrastText",
    fill: "currentcolor",
}

const accordionSx: SxProps<Theme> = {
    padding: ".125rem 1.25rem",
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    margin: "0"
}

const accordionTitleSx: SxProps<Theme> = {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "inherit"
}

const accordionBodySx: SxProps<Theme> = {
    fontSize: ".9rem",
    lineHeight: "1.7",
    padding: "1.25rem"
}

const Accordion: React.FC<TAccordion> = props => {
    const { accordions } = props
    
    const initialOpenedAccordion = accordions[0].id ?? 0
    const [currentAccordionIndex, setCurrentAccordionIndex] = useState(initialOpenedAccordion)

    return accordions.map(({ id, title, body }) => <MuiAccordion key={title}
        expanded={currentAccordionIndex === id}
        onChange={() => setCurrentAccordionIndex(id)} >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={accordionIconSx} />}
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
            sx={accordionSx}
        >
            <Typography component="h5" sx={accordionTitleSx}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ border: "1px solid black", borderColor: "primary.main" }}>
            <Typography sx={accordionBodySx}>{body}</Typography>
        </AccordionDetails>
    </MuiAccordion>)
}

export default Accordion