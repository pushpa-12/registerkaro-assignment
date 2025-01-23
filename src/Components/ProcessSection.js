import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import PaymentIcon from "@mui/icons-material/Payment";
import Face6Icon from "@mui/icons-material/Face6";
import EmailIcon from "@mui/icons-material/Email";

const ProcessSection = () => {
  const processList = [
    {
      icon: <StickyNote2OutlinedIcon />,
      color: "#EB5757",
      title: "Fill up Application Form",
    },
    {
      icon: <PaymentIcon />,
      color: "#27AE60",
      title: "Make Online Payment",
    },
    {
      icon: <Face6Icon />,
      color: "#F2994A",
      title: "Executive will Process Application",
    },
    {
      icon: <EmailIcon />,
      color: "#828282",
      title: "Get Confirm Mail",
    },
  ];

  return (
    <Grid container sx={{ backgroundColor: "#FFA229", p: { xs: "15px", sm: "30px" }, flexDirection: { xs: "column", sm: "row" } }}>
      {processList.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", alignItems: "center", gap: "10px", mb: { xs: "15px", sm: "0" } }}>
          <Box
            sx={{
              backgroundColor: item.color,
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </Box>
          <Typography sx={{ fontSize: { xs: "16px", sm: "18px" } }}> {item.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProcessSection;