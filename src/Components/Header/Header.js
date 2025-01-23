import React from "react";
import { Grid2, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          minHeight: "44px",
          backgroundColor: "#1C4670",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: { xs: "5px", sm: "10px" }, 
        }}
      >
        <Grid2
          item
          xs={4} 
          sm={3}
          sx={{
            display: "flex",
            color: "white",
            borderRight: { xs: "none", sm: "2px solid white" }, 
            mr: { xs: "5px", sm: "10px" },
            pr: "5px",
          }}
        >
          <EmailIcon fontSize="small" />
          <Typography sx={{ pl: "5px", fontSize: { xs: "12px", sm: "14px" } }}> www.registerkaro.in</Typography>
        </Grid2>
        <Grid2
          item
          xs={4} 
          sm={3}
          sx={{
            display: "flex",
            color: "white",
            borderRight: { xs: "none", sm: "2px solid white" }, 
            mr: { xs: "5px", sm: "10px" },
            pr: "5px",
          }}
        >
          <PhoneEnabledIcon fontSize="small" />
          <Typography sx={{ pl: "5px", fontSize: { xs: "12px", sm: "14px" } }}> +918447746183</Typography>
        </Grid2>
        <Grid2 item xs={4} sm={6} sx={{ display: "flex", justifyContent: "flex-end", mr: { xs: "5px", sm: "20px" } }}>
          <InstagramIcon fontSize="small" sx={{ color: "white", mr: "5px" }} />
          <FacebookOutlinedIcon fontSize="small" sx={{ color: "white", mr: "5px" }} />
          <TwitterIcon fontSize="small" sx={{ color: "white", mr: "5px" }} />
          <PinterestIcon fontSize="small" sx={{ color: "white", mr: "5px" }} />
        </Grid2>
      </Grid2>
      <Nav />
    </>
  );
};

export default Header;