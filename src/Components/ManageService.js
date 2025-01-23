import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import phoneImg from "../Assets/phone.png";

const ManageService = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#1C4670",
        p: { xs: "20px", sm: "30px" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={5}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "24px", md: "32px" },
            fontWeight: 800,
            color: "white",
            mb: "10px",
          }}
        >
          Manage Your Services by your Mobile Phone
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontWeight: 400,
            color: "#AAB5CD",
            mb: "20px",
          }}
        >
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontWeight: 500,
            color: "white",
            mb: "20px",
          }}
        >
          Get the App
        </Typography>

        <Grid container spacing={2}>
          <Grid item>
            <Box
              sx={{
                backgroundColor: "white",
                p: "15px",
                maxWidth: "150px",
                border: "1px solid green",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AppleIcon sx={{ color: "green" }} fontSize="medium" />
              <Typography>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    display: "block",
                  }}
                >
                  Get it on
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    display: "block",
                  }}
                >
                  App Store
                </span>
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                backgroundColor: "white",
                p: "15px",
                maxWidth: "150px",
                border: "1px solid green",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <ShopIcon sx={{ color: "green" }} fontSize="medium" />
              <Typography>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    display: "block",
                  }}
                >
                  Get it on
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    display: "block",
                  }}
                >
                  Google Play
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          overflow: "hidden",
          height: { xs: "250px", sm: "350px" }, 
        }}
      >
        <img
          src={phoneImg}
          alt="phone"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ManageService;