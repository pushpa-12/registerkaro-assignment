import { Grid, Typography } from "@mui/material";
import React from "react";

const WhyRegisterkaro = () => {
  const listOfNum = [
    {
      count: "1M",
      name: "CUSTOMERS",
    },
    {
      count: "12",
      name: "YEARS OF EXCELLENCE",
    },
    {
      count: "41",
      name: "R&D ENGINEERS",
    },
    {
      count: "78",
      name: "COUNTRIES",
    },
    {
      count: "3287",
      name: "PARTNERS",
    },
    {
      count: "41",
      name: "AWARDS RECEIVED",
    },
  ];

  return (
    <Grid container sx={{ p: { xs: "20px", sm: "30px" }, textAlign: "center" }}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mb: "10px",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 400, color: "#EB8D15" }}
        >
          Why Register Karo
        </Typography>
        <Typography sx={{ fontSize: { xs: "24px", sm: "32px" }, fontWeight: 700 }}>
          Some Numbers are Important
        </Typography>
      </Grid>

      {listOfNum.map((item, index) => (
        <Grid
          item
          xs={6} 
          sm={4} 
          md={2} 
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(168.38deg, #FFA229 10%, #2F5795 68%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              fontSize: { xs: "32px", sm: "42px" }, 
            }}
          >
            {item.count}
            <sup style={{ fontSize: "12px", color: "#FFA229" }}>+</sup>
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "14px", sm: "16px" } }}>
            {item.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default WhyRegisterkaro;