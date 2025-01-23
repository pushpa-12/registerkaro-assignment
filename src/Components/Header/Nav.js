import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import logo from "../../Assets/logo_logo 1.png";
import christmas from "../../Assets/christmas-hat-png-15 1.png";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "71.1px",
        borderBottom: "1px solid",
        borderColor: "#ccc8c8",
        p: { xs: "10px", sm: "20px" },
      }}
    >
      <Grid item xs={5} sm={4} sx={{ display: "flex", alignItems: "center" }}>
        <img
          alt="christmas"
          src={christmas}
          style={{
            width: "30px", 
            height: "30px",
            marginLeft: { xs: "10px", sm: "90.76px" },
            zIndex: 1,
          }}
        />
        <img
          alt="logo"
          src={logo}
          style={{
            width: "120px", 
            height: "auto",
            marginTop: "10px",
            marginLeft: { xs: "5px", sm: "-10px" },
          }}
        />
      </Grid>
      <Grid item xs={7} sm={8} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flexWrap: "wrap" }}>
        <Grid item sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {["Home", "Our Services", "Blog", "Contact Us", "About Us"].map((text) => (
            <Typography
              key={text}
              component="a"
              href={`#${text.toLowerCase().replace(" ", "")}`}
              sx={{
                textDecoration: "none",
                color: "#272D37",
                "&:hover": { textDecoration: "underline" },
                marginRight: { xs: "5px", sm: "10px" },
                fontSize: { xs: "12px", sm: "16px" }, 
                mb: { xs: "5px", sm: "0" }, 
              }}
            >
              {text}
            </Typography>
          ))}
        </Grid>
        <SearchIcon sx={{ marginLeft: { xs: "5px", sm: "10px" }, fontSize: { xs: "20px", sm: "24px" } }} />
        <Button variant="contained" sx={{ backgroundColor: "#FFA229", marginLeft: { xs: "5px", sm: "10px" }, fontSize: { xs: "12px", sm: "14px" } }}>
          Talk An Expert
        </Button>
      </Grid>
    </Grid>
  );
};

export default Nav;