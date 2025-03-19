"use client"
import { Button, TextField, Grid2, styled } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";

const ContentContainer = styled(Grid2)({ padding: "0 .9rem", margin: "0 auto", textAlign: "center"  })

const StyledButton = styled(Button)({marginTop: "1.25rem", padding: ".8rem"})


const Subscribe: React.FC = props => {
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                title="Subscribe now"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                 />
            </Grid2>
            <ContentContainer size={{xs: 12, md: 6 }}>
            <TextField label="Enter Your Email" variant="outlined" fullWidth/>
                <StyledButton variant="contained" startIcon={<SendIcon />}>Subscribe</StyledButton>
            </ContentContainer>
        </Grid2>
    </Section>
}

export default Subscribe