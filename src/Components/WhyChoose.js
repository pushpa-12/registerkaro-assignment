import { Grid, Typography } from "@mui/material";
import React from "react";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PersonIcon from "@mui/icons-material/Person";

const WhyChoose = () => {
  const chooseReason = [
    {
      icon: (
        <SafetyCheckOutlinedIcon sx={{ color: "#F45C20" }} fontSize="large" />
      ),
      title: "Confidential & Safe",
      desc: "All your private information is safe with us",
      bgColor: "#FCDDEC",
    },
    {
      icon: <CheckCircleIcon sx={{ color: "#3DCD5C" }} fontSize="large" />,
      title: "No Hidden Fee",
      desc: "Everything is put before you with no hidden charges or conditions",
      bgColor: "#F1FBF3",
    },
    {
      icon: <EmojiEmotionsIcon sx={{ color: "#F45C20" }} fontSize="large" />,
      title: "Guaranteed Satisfaction",
      desc: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "#EDF3FF",
    },
    {
      icon: <PersonIcon sx={{ color: "#D5414F" }} fontSize="large" />,
      title: "Expert CA/CS Assistance",
      desc: "Prompt support from our in-house expert professionals",
      bgColor: "#FBF1FB",
    },
    {
      icon: (
        <SafetyCheckOutlinedIcon sx={{ color: "#F45C20" }} fontSize="large" />
      ),
      title: "Confidential & Safe",
      desc: "All your private information is safe with us",
      bgColor: "#FCDDEC",
    },
  ];
  return (
    <Grid
      container
      sx={{ padding: "30px", display: "flex", justifyContent: "space-between" }}
    >
      <Grid item xs={12} md={5}>
        <Typography sx={{ color: "#EB8D15", fontSize: "14px" }}>
          WHY REGISTERKARO.IN{" "}
        </Typography>
        <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
          Why Choose Register Karo
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          It is with consistent services and results that build trust with the
          people and that in turn help us to serve the business better.
        </Typography>
      </Grid>
      {chooseReason.slice(0, 2)?.map((item) => (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            backgroundColor: item.bgColor,
            borderRadius: "7px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: "20px",
            mb:{xs:"5px"}
          }}
        >
          {item.icon}
          <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
            {" "}
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: "15px", fontWeight: 400,textAlign:"center" }}>
            {" "}
            {item.desc}
          </Typography>
        </Grid>
      ))}

      <Grid container sx={{mt:"20px",display:"flex", justifyContent:"flex-end", alignItems:"center",}}>
        {chooseReason.slice(2)?.map((item) => (
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              backgroundColor: item.bgColor,
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: "20px",
              marginRight:"30px",
              mb:{xs:"5px"}
            }}
          >
            {item.icon}
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              {" "}
              {item.title}
            </Typography>
            <Typography sx={{ fontSize: "15px", fontWeight: 400, textAlign:"center" }}>
              {" "}
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default WhyChoose;
