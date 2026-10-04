import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const technicalskills = [
    // Core
    { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas" },
    { name: "Numpy", logo: "https://cdn.simpleicons.org/numpy" },
    { name: "Seaborn", logo: "https://brandlogos.sgp1.digitaloceanspaces.com/svg/logos/seaborn.svg" },
    { name: "Matplotlib", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },

    // Backend / APIs
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Power BI", logo: "https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png" },
    { name: "Excel", logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/microsoft-excel/default.svg" },

    // Database
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

    // Tools
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },

];

export default function Technicalskills() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % Technicalskills.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                py: 8,
                background: "linear-gradient(180deg, #ffffff 0%, #f3e8ff 100%)",
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold", color: "#7e22ce", mb: 6 }}
            >
                My Technical Skills
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{
                maxWidth: "90%",   
                margin: "0 auto", 
            }}>
                {technicalskills.map((tech, i) => (
                    <Grid key={tech.name} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 3,
                                textAlign: "center",
                                borderRadius: "20px",
                                bgcolor: i === index ? "#b794f4" : "white",
                                color: i === index ? "white" : "black",
                                transition: "all 0.3s ease",
                                transform: i === index ? "scale(1.05)" : "scale(1)",
                                "&:hover": {
                                    bgcolor: "#b794f4",
                                    color: "white",
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginBottom: "10px",
                                }}
                            />
                            <Typography variant="subtitle1">{tech.name}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
