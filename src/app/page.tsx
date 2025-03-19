import { Box, SxProps, Theme } from "@mui/material";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Features from "./sections/Features";
import Services from "./sections/Services";
import Counters from "./sections/Counters";
import Pricing from "./sections/Pricing";
import Team from "./sections/Team";
import Review from "./sections/Review";
import Faq from "./sections/Faq";
import Subscribe from "./sections/Subscribe";
import News from "./sections/News";
import Clients from "./sections/Clients";
import Video from "./sections/Video";
import Contact from "./sections/Contact";

const containerSx: SxProps<Theme> = {
  "&>*": {
    "&:nth-child(odd)": {
      backgroundColor: "var(--app-background-color)"
    }
  }
}

export default function Home() {


  return <Box sx={containerSx}>
    <Welcome />
    <About />
    <Features />
    <Services />
    <Counters />
    <Pricing />
    <Team />
    <Review />
    <Faq />
    <Subscribe />
    <News />
    <Clients />
    <Video />
    <Contact />
  </Box>
}
