"use client"
import { IconButton, Modal, styled, SxProps, Theme, Typography } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, { useCallback } from "react";
import Section from "../../components/Section";

const sectionSx: SxProps<Theme> = {
    backgroundImage: `url(./workspace.jpg)`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
}

const buttonAnnotationSx: SxProps<Theme> = {
    fontSize: "1.5rem",
    fontWeight: 500,
    lineHeight: 1.1,
    marginTop: "1.875rem"
}


const Container = styled("div")({
    padding: "5rem 0",
    textAlign: "center",
    color: "var(--mui-palette-primary-contrastText)"
})

const FrameContainer = styled("div")({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80dvw",
    height: "70dvh"
})


const Video: React.FC = props => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = useCallback(() => setOpen(true), [])

    const handleClose = useCallback(() => setOpen(false), [])

    return <Section sx={sectionSx} withOverlay>
        <Container>
            <IconButton
                size="large"
                color="inherit"
                onClick={handleOpen}>
                <PlayArrowIcon
                    fontSize="inherit"
                    color="primary"
                />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FrameContainer>
                    <iframe src="https://www.youtube.com/embed/BBJa32lCaaY?autoplay=1" frameBorder="0" allowFullScreen width="100%" height="100%" />
                </FrameContainer>
            </Modal>
            <Typography component="h4" sx={buttonAnnotationSx}>Watch Video</Typography>
        </Container>
    </Section>
}


export default Video