"use client"
import { Button, List, ListItem, Paper, Typography, Grid2, SxProps, Theme, styled } from "@mui/material"
import Section from "../../components/Section"
import plans from "@/mock/pricing_plans.json"
import SectionTitle from "../../components/SectionTitle"


type TCard = {
    title: string,
    coast: number,
    properties: Array<string>
}


const cardContainerSx: SxProps<Theme> = {
    padding: "0 .9rem",
    marginBottom: { xs: "1rem", md: 0 }
}

const cardTitleSx: SxProps<Theme> = {
    fontSize: "1.75rem",
    fontWeight: 600,
    margin: "1.25rem 0",
    lineHeight: 1.1
}

const cardCoastSx: SxProps<Theme> = {
    fontSize: "2rem",
    fontWeight: 500,
    padding: "1.25rem",
    color: "primary.contrastText",
    backgroundColor: "primary.main",
    lineHeight: 1.1
}

const cardCoastPerMonthSx: SxProps<Theme> = {
    fontSize: ".75rem",
    fontWeight: 600
}

const cardPropContainerSx: SxProps<Theme> = {
    justifyContent: "center",
    padding: 0
}

const cardPropsSx: SxProps<Theme> = {
    textTransform: "uppercase",
    lineHeight: "1.875rem",
    fontSize: ".875rem"
}

const cardButtonSx: SxProps<Theme> = {
    padding: "1rem 1.5rem", marginBottom: "1rem"
}


const StyledPaper = styled(Paper)({
    border: "1px solid var(--mui-palette-primary-main)",
    textAlign: "center"
})


const Card: React.FC<TCard> = props => {
    const { title, coast, properties } = props
    return <Grid2 size={{ xs: 12, sm: 6, md: 3 }} sx={cardContainerSx}>
        <StyledPaper elevation={0}>
            <Typography component="h3" sx={cardTitleSx}>{title}</Typography>
            <Typography component="h2" sx={cardCoastSx}>
                {`$${coast}`}
                <Typography component="span" sx={cardCoastPerMonthSx}> / m</Typography>
            </Typography>
            <List>
                {properties.map(property => <ListItem key={property} sx={cardPropContainerSx}>
                    <Typography sx={cardPropsSx}>{property}</Typography>
                </ListItem>)}
            </List>
            <Button variant="contained" sx={cardButtonSx}>Order</Button>
        </StyledPaper>
    </Grid2>
}

const Pricing: React.FC = props => {
    return <Section>
        <Grid2 container>
            <Grid2 size={12} >
                <SectionTitle
                    title="Pricing plan"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur eveniet earum odio rem."
                />
            </Grid2>
            {plans.map((plan) => <Card key={plan.id} {...plan} />)}

        </Grid2>
    </Section>
}

export default Pricing