import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LogoClient1 from "../Assets/clients/LogoClient1.png";
import LogoClient2 from "../Assets/clients/LogoClient2.png";
import LogoClient3 from "../Assets/clients/LogoClient3.png";
import LogoClient4 from "../Assets/clients/LogoClient4.png";
import LogoClient5 from "../Assets/clients/LogoClient5.png";
import LogoClient6 from "../Assets/clients/LogoClient6.png";
import LogoClient7 from "../Assets/clients/LogoClient7.png";
import LogoClient8 from "../Assets/clients/LogoClient8.png";
import LogoClient9 from "../Assets/clients/LogoClient9.png";
import LogoClient10 from "../Assets/clients/LogoClient10.png";
import LogoClient11 from "../Assets/clients/LogoClient11.png";
import LogoClient12 from "../Assets/clients/LogoClient12.png";
import LogoClient13 from "../Assets/clients/LogoClient13.png";
import LogoClient14 from "../Assets/clients/LogoClient14.png";
import LogoClient15 from "../Assets/clients/LogoClient15.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Clients = () => {
  const clientLogos = [
    { id: 1, src: LogoClient1, alt: "Logo 1" },
    { id: 2, src: LogoClient2, alt: "Logo 2" },
    { id: 3, src: LogoClient3, alt: "Logo 3", width: "40px" },
    { id: 4, src: LogoClient4, alt: "Logo 4" },
    { id: 5, src: LogoClient5, alt: "Logo 5", width: "40px" },
    { id: 6, src: LogoClient6, alt: "Logo 6" },
    { id: 7, src: LogoClient7, alt: "Logo 7" },
    { id: 8, src: LogoClient8, alt: "Logo 8" },
    { id: 9, src: LogoClient9, alt: "Logo 9", width: "40px" },
    { id: 10, src: LogoClient10, alt: "Logo 10" },
    { id: 11, src: LogoClient11, alt: "Logo 11", width: "40px" },
    { id: 12, src: LogoClient12, alt: "Logo 12" },
    { id: 13, src: LogoClient13, alt: "Logo 13" },
    { id: 14, src: LogoClient14, alt: "Logo 14", width: "40px" },
    { id: 15, src: LogoClient15, alt: "Logo 15" },
  ];

  const firstRow = clientLogos.slice(0, 7);
  const secondRow = clientLogos.slice(7);

  return (
    <Grid container sx={{ p: "30px" }}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
          Our Happy Clients
        </Typography>
        <Typography sx={{ fontSize: "16px", textAlign: "center" }}>
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling <br></br>customer
          service for state of the art customer service.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(7, 1fr)`,
              gap: 2,
              position: "relative",
            }}
          >
            {firstRow.map((logo, index) => (
              <Box
                key={logo.id}
                sx={{
                  position: "relative",
                  top: index % 2 === 0 ? "0px" : "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    width: logo?.width ? logo?.width : "80px",
                    height: logo?.width ? logo?.width : "80px",
                    objectFit: "contain",
                    backgroundColor: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(8, 1fr)`,
              gap: 2,
              position: "relative",
            }}
          >
            {secondRow.map((logo, index) => (
              <Box
                key={logo.id}
                sx={{
                  position: "relative",
                  top: index % 2 === 0 ? "20px" : "0px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    width: logo?.width ? logo?.width : "80px",
                    height: logo?.width ? logo?.width : "80px",
                    objectFit: "contain",
                    backgroundColor: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center", // Centers the button horizontally
          mt: "30px",
          mb: "10px",
        }}
      >
        <Button endIcon={<ArrowRightAltIcon />}>Show more</Button>
      </Grid>
    </Grid>
  );
};

export default Clients;
