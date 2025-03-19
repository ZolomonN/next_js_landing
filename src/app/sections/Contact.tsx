"use client"
import { Button, TextField, Typography, Grid2, styled, SxProps, Theme } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { GoogleMapsEmbed } from "@next/third-parties/google"
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

const contactTitleSx: SxProps<Theme> = {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.1,
    margin: ".9rem 0"
}

const contactPropertySx: SxProps<Theme> = {
    lineHeight: 1.1,
    margin: "0 0 .5rem"
}

const fieldSx: SxProps<Theme> = { marginBottom: "1rem" }

const buttonSx: SxProps<Theme> = {padding: ".9rem 1.25rem"}

const ContactContainer = styled(Grid2)({
    color: "var(--mui-palette-primary-contrastText)",
    backgroundColor: "var(--mui-palette-primary-main)",
    padding: "1.875rem",
    textAlign: "center"
})


const contactsList = [
    { Icon: LocationOnIcon, title: "Address", props: ["Entronque Carr. Saltillo Km. 54,", "La Prieta, Zac., Mexico"] },
    { Icon: PhoneIcon, title: "Phone", props: ["+123456766668", "+2434445889438"] },
    { Icon: EmailIcon, title: "Email", props: ["info@test.com", "support@text.com"] },
]


const Contact: React.FC = props => {
    return <Section>
        <Grid2 container spacing={3}>
            <Grid2 size={12} >
                <SectionTitle
                    title="Contact us"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            <Grid2 container size={12} spacing={3.75} >
                {contactsList.map(({ Icon, title, props }) => <ContactContainer key={title} size={{ xs: 12, md: 4 }}>
                    <Icon fontSize="large" />
                    <Typography component="h4" sx={contactTitleSx}>{title}</Typography>
                    {props.map(property => <Typography key={property} component="h6" sx={contactPropertySx}>{property}</Typography>)}
                </ContactContainer>)}
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <GoogleMapsEmbed
                    apiKey="AIzaSyBQbyhXkugvh3snVBelIHB4nSx6heVPK-I"
                    height={400}
                    width="100%"
                    mode="place"
                    q="Brooklyn+Bridge,New+York,NY"
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField label="Your Name" variant="outlined" fullWidth sx={fieldSx} />
                <TextField label="Your Email" variant="outlined" fullWidth sx={fieldSx} />
                <TextField label="Subject" variant="outlined" fullWidth sx={fieldSx} />
                <TextField label="Subject" variant="outlined" fullWidth sx={fieldSx} />
                <TextField label="Message" variant="outlined" fullWidth sx={fieldSx} multiline minRows={4} />
                <Button variant="contained" sx={buttonSx}>Send</Button>
            </Grid2>
        </Grid2>
    </Section>
}

export default Contact