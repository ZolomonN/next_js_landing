import { Box } from "@mui/material"

const Dashboard: React.FC = props => {
    return <Box>
        <Box sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0, 0.5)",
            height: "70px",
        }}>Menu</Box>
        <Box>Content</Box>
        <Box sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0, 0.5)",
            height: "70px",
        }}>Footer</Box>
    </Box>
}

export default Dashboard