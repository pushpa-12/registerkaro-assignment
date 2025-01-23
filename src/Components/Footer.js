import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        p: { xs: "20px", sm: "30px" },
        backgroundColor: "#011B5B",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Grid item xs={12} sm={2.5} sx={{ mb: { xs: "20px", sm: "0" } }}>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#AAB5CD" }}>
          Design outstanding interfaces with advanced Figma features in a matter of minutes.
        </Typography>
        <Box sx={{ mt: "20px" }}>
          <FacebookOutlinedIcon sx={{ color: "white", mr: "10px" }} />
          <GoogleIcon sx={{ color: "white", mr: "10px" }} />
          <AppleIcon sx={{ color: "white", mr: "10px" }} />
          <InstagramIcon sx={{ color: "white" }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={2.5} sx={{ mb: { xs: "20px", sm: "0" } }}>
        <Typography sx={{ color: "#FFA229", fontWeight: 700, fontSize: { xs: "14px", sm: "16px" } }}>
          START A BUSINESS
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Features
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Solutions
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Integrations
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Enterprise
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Solutions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2.5} sx={{ mb: { xs: "20px", sm: "0" } }}>
        <Typography sx={{ color: "#FFA229", fontWeight: 700, fontSize: { xs: "14px", sm: "16px" } }}>
          GOVERNMENT REGISTRATION
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Partners
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Community
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Developers
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          App
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2.5} sx={{ mb: { xs: "20px", sm: "0" } }}>
        <Typography sx={{ color: "#FFA229", fontWeight: 700, fontSize: { xs: "14px", sm: "16px" } }}>
          COMPLIANCE & TAX
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Channels
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Scale
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Watch the Demo
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Our Competition
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2.5} sx={{ mb: { xs: "20px", sm: "0" } }}>
        <Typography sx={{ color: "#FFA229", fontWeight: 700, fontSize: { xs: "14px", sm: "16px" } }}>
          BIS & CDSCO
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          About Us
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          News
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Leadership
        </Typography>
        <Typography sx={{ color: "#AAB5CD", fontSize: { xs: "12px", sm: "14px" } }}>
          Media Kit
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ mt: "20px" }}>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, textAlign: "center", color: "white" }}>
          © 2024 Registerkaro. All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;