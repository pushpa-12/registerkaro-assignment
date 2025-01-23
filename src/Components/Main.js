import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import bgImg from "../Assets/Section.png"

const Main = () => {
  const achievementList = [
    {
      value: "4.5",
      icon: <WidgetsOutlinedIcon fontSize="medium" />,
      title: "Customer Rating",
    },
    {
      value: "20000",
      icon: <GroupsOutlinedIcon fontSize="medium" />,
      title: "Clients",
    },
    {
      value: "99.8",
      icon: <HandshakeOutlinedIcon fontSize="medium" />,
      title: "Financial Stability",
    },
  ];

  return (
    <Grid
      container
      sx={{
        p: { xs: "20px", sm: "30px" }, 
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <StarIcon sx={{ color: "#FFA229" }} />
          <Typography
            component="span"
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              mx: 1,
            }}
          >
            Google Rating
          </Typography>
          <Rating name="read-only" value={5} readOnly />
        </Typography>

        <Typography sx={{ fontWeight: 500, fontSize: { xs: "36px", sm: "47px" }, mb: 1 }}>
          Your trusted partner
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: { xs: "36px", sm: "48.63px" }, mb: 2 }}>
          for compliance business needs
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            mt: 2,
            mb: 4,
          }}
        >
          An online business compliance platform that helps entrepreneurs and
          individuals with various registrations, tax filings, and other legal
          matters.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
          {achievementList.map((item, index) => (
            <Box
              key={index}
              sx={{
                p: "15px",
                maxWidth: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "8px",
              }}
            >
              {item.icon}
              <Typography>
                <span
                  style={{
                    fontWeight: "bold",
                    background:
                      "linear-gradient(168.38deg, #FFA229 10%, #2F5795 68%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "20px",
                  }}
                >
                  {item.value}
                  <sup style={{ fontSize: "12px", color: "#FFA229" }}>+</sup>
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    display: "block",
                    color: "#4F4F4F",
                  }}
                >
                  {item.title}
                </span>
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              p: "10px 20px",
              backgroundColor: "#1C4670",
              "&:hover": { backgroundColor: "#163355" },
            }}
          >
            Talk to an Expert
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PlayCircleFilledOutlinedIcon sx={{ color: "red" }} />
            <Typography>See how it works</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Main;
