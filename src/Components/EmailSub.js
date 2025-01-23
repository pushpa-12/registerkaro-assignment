import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EmailSub = () => {
  return (
    <Grid
      container
      sx={{
        p: { xs: "20px", sm: "30px" },
        background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 600, color: "white" }}>
          1% OF THE INDUSTRY
        </Typography>
        <Typography sx={{ fontSize: { xs: "24px", sm: "32px" }, fontWeight: 700, color: "white", textAlign: "center" }}>
          Welcome to your new digital reality. Now.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "10px", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter Your Email"
          style={{
            padding: "10px",
            marginBottom: { xs: "10px", sm: "0" },
            width: { xs: "100%", sm: "auto" }, 
            maxWidth: "300px", 
          }}
        />
        <Button variant="contained" sx={{ backgroundColor: "#FFA229", ml: { xs: "0", sm: "10px" } }}>
          Submit
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "20px", flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", color: "white", mr: "10px", alignItems: "center" }}>
          <CheckCircleIcon />
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, ml: "10px" }}>
            Instant results
          </Typography>
        </Box>
        <Box sx={{ display: "flex", color: "white", mr: "10px", alignItems: "center" }}>
          <CheckCircleIcon />
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, ml: "10px" }}>
            User-friendly interface
          </Typography>
        </Box>
        <Box sx={{ display: "flex", color: "white", alignItems: "center" }}>
          <CheckCircleIcon />
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, ml: "10px" }}>
            Personalized customization
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EmailSub;