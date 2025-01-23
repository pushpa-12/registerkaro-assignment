import React from "react";
import { Grid2, Typography, Box } from "@mui/material";
import oracleImg from "../Assets/oracle.png";
import mondayImg from "../Assets/monday.png";
import morpheusImg from "../Assets/morpheus.png";
import samsungImg from "../Assets/samsung.png";
import segmentImg from "../Assets/segment.png";

const Company = () => {
  const companyLogo = [
    oracleImg,
    morpheusImg,
    samsungImg,
    mondayImg,
    segmentImg,
  ];
  return (
    <Grid2
      container
      sx={{
        height: "236px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 item xs={12}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Trusted By Over 100+ Startups and Freelance Businesses
        </Typography>
      </Grid2>

      <Grid2 item xs={12}>
        {companyLogo?.map((comLogo) => (
          <Box
            component="img"
            alt="oracle"
            src={comLogo}
            sx={{
              width: { xs: "80px", sm: "137.15px" },
              height: "auto",
              margin: { xs: "10px", sm: "0 15px" }
            }}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};

export default Company;
