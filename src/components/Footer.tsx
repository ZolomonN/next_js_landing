"use client"

import {  Container, IconButton, Grid2, styled, SxProps, Theme } from "@mui/material"
import { Facebook, LinkedIn, Twitter, Google } from "@mui/icons-material"


const copyrightContainerSx: SxProps<Theme> = {
    justifyContent: "center",
    alignItems: "center",
    margin: { xs: "1rem 0 .5rem", md: 0 }
}

const socialNetworksContainerSx: SxProps<Theme> = {
    justifyContent: { xs: "center", md: "flex-end" },
    alignItems: "center"
}

const socialNetworkIconSx: SxProps<Theme> = { color: "var(--mui-palette-primary-contrastText)" }


const FooterContainer = styled("div")({
    color: "var(--mui-palette-primary-contrastText)",
    backgroundColor: "var(--mui-palette-primary-main)"
})


const socialNetworks = [
    { title: "facebook", Icon: Facebook },
    { title: "twitter", Icon: Twitter },
    { title: "google", Icon: Google },
    { title: "linkedin", Icon: LinkedIn }
]


const Footer: React.FC = props => {
    return <FooterContainer>
        <Container maxWidth="lg">
            <Grid2 container sx={{ minHeight: "4.75rem" }}>
                <Grid2 sx={copyrightContainerSx} container size={{ xs: 12, md: 6 }} >
                    © Copyright {new Date().getFullYear()} Zolomon | All Rights Reserved.
                </Grid2>
                <Grid2 container size={{ xs: 12, md: 6 }} sx={socialNetworksContainerSx}>
                    {socialNetworks.map(({ title, Icon }) => <IconButton
                        key={title}
                        size="large"
                        sx={socialNetworkIconSx}>
                        <Icon fontSize="inherit" />
                    </IconButton>
                    )}
                </Grid2>
            </Grid2>
        </Container>
    </FooterContainer>
}

export default Footer