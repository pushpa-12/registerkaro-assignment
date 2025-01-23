import { Grid, Typography } from "@mui/material";
import React from "react";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

const VideoInstruction = () => {
  const list = [
    {
      icon: <LightbulbCircleIcon sx={{ color: "#FFA229" }} fontSize="large" />,
      title: "Explore ideas together",
      desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      icon: <LightbulbCircleIcon sx={{ color: "#FFA229" }} fontSize="large" />,
      title: "Bring those ideas to life",
      desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
  ];

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#1C4670",
        p: { xs: "15px", sm: "30px" }, 
        display: "flex",
        justifyContent: "space-between",
        flexWrap: { xs: "wrap", md: "nowrap" }, 
        alignItems: "center",
        color: "white",
      }}
    >
      <Grid item xs={12} md={7}>
        <Typography sx={{ fontSize: { xs: "24px", sm: "34px" }, fontWeight: 700 }}>
          Our Video Introductions
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#AAB5CD" }}>
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </Typography>

        {list.map((item, index) => (
          <Grid container sx={{ mt: "10px" }} key={index}>
            <Grid item>{item.icon}</Grid>
            <Grid item sx={{ ml: 2 }}>
              <Typography sx={{ fontSize: { xs: "18px", sm: "22px" }, fontWeight: 700 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#AAB5CD" }}>
                {item.desc}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={5}>
        <img
          alt="video"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "7px" }} 
          src="https://s3-alpha-sig.figma.com/img/a62c/2d74/6f4256f5f8a9ed25e6891d1db44e4512?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TbtnZV355IPf7gsFwWFjfGHw9tNBVkFNJRjIK5NdJpsA0RioKMoQdxUpLC6lqENAmmy370zGKj80Xy1XQmiYnC7PzlFbZ3qEar~EWIAvQZsGSVOMvNzcWRMDp0Xbf0077Lx20WJ5A-GmYQwaY5geFX~yrNsXrzO-jAarOnJXWeaeVywO0wjeyXbdWfYkIYR3L91yMF4cmF6wOp9jKwpqDaDgl8EFv6wuJzidfsqfoETLr7s1YFuHUxdgMztYWrG9nQ0AixdYfWLNs0OFZq7tJB8bkvZk~7ih73r6w2vVRAqyz5CPDUfLXTi5V9V-c30HkHMnJnQZiJWeABTLOYfPgA__"
        />
      </Grid>
    </Grid>
  );
};

export default VideoInstruction;