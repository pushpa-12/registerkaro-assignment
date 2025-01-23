import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import teamImg from "../Assets/registerkaroTeam.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const About = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: { xs: "15px", sm: "30px" }, 
        display: "flex",
        justifyContent: "space-between",
        flexWrap: { xs: "wrap", md: "nowrap" },
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography sx={{ color: "#EB8D15", fontSize: { xs: "12px", sm: "14px" } }}>
          WELCOME TO REGISTERKARO.IN
        </Typography>
        <Typography sx={{ fontSize: { xs: "24px", sm: "32px" }, fontWeight: 700 }}>
          <span style={{ color: "black" }}>About</span>{" "}
          <span style={{ color: "#EB8D15" }}>Register Karo</span>
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years, and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever-changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects, thereby exceeding
          everyone’s expectations.<br/> <br/> I would strongly recommend their services to
          any organization that is looking for solid, reliable, and predictable
          outcomes.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowCircleRightOutlinedIcon />}
          sx={{ backgroundColor: "#1C4670", mt: "30px", mb: "10px" }}
        >
          Learn More
        </Button>
      </Grid>
      <Grid item xs={12} md={5}>
        <img
          alt="team"
          src={teamImg}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default About;