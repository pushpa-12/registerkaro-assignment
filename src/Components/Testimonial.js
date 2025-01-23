import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Rating,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import quoteImg from "../Assets/quote.png";

const testimonials = [
  {
    name: "Chris",
    start: 4,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    location: "President and CEO, PrintReach, USA",
    avatar:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
  },
  {
    name: "Chris",
    start: 4,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    location: "President and CEO, PrintReach, USA",
    avatar:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
  },
  {
    name: "Chris",
    start: 4,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    location: "President and CEO, PrintReach, USA",
    avatar:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
  },
  
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = testimonials.length;

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides);
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#1C4670", p: "30px", overflow: "hidden" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
        >
          <Typography
            sx={{ fontSize: "32px", fontWeight: 700, color: "#ffffff" }}
          >
            What people say about us
          </Typography>
          <Box>
            <IconButton onClick={handlePrev}>
              <ArrowCircleLeftIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowCircleRightIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentIndex * 33.33}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            width: `${(totalSlides + 2) * 33.33}%`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <Box sx={{ minWidth: { xs: "100%", md: "33.33%" }, boxSizing: "border-box", px: 2 }}>
            <Card
              sx={{ backgroundColor: "#ffffff", borderRadius: "10px", p: 3 }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img
                    alt="comma"
                    src={quoteImg}
                    style={{ width: "32px", height: "32px" }}
                  />
                  <Rating
                    value={testimonials[totalSlides - 1].start}
                    readOnly
                  />
                </Box>

                <Typography sx={{ textAlign: "center", color: "#555" }}>
                  {testimonials[totalSlides - 1].desc}
                </Typography>
                <Box sx={{ display: "flex", mt: "10px", alignItems: "center" }}>
                  <Avatar
                    src={testimonials[totalSlides - 1].avatar}
                    alt={testimonials[totalSlides - 1].name}
                    sx={{ width: 80, height: 80, mb: 2, mr: "20px" }}
                  />
                  <Typography sx={{ fontWeight: 600, mb: 2 }}>
                    {testimonials[totalSlides - 1].name}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{ minWidth:{ xs: "100%", md: "33.33%" } , boxSizing: "border-box", px: 2 }}
            >
              <Card
                sx={{ backgroundColor: "#ffffff", borderRadius: "10px", p: 3 }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <img
                      alt="comma"
                      src={quoteImg}
                      style={{ width: "32px", height: "32px" }}
                    />
                    <Rating value={testimonial.start} readOnly />
                  </Box>

                  <Typography sx={{ textAlign: "center", color: "#555" }}>
                    {testimonial.desc}
                  </Typography>
                  <Box
                    sx={{ display: "flex", mt: "10px", alignItems: "center" }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 80, height: 80, mb: 2, mr: "20px" }}
                    />
                    <Typography sx={{ fontWeight: 600, mb: 2 }}>
                      {testimonial.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}

          <Box sx={{ minWidth: { xs: "100%", md: "33.33%" }, boxSizing: "border-box", px: 2 }}>
            <Card
              sx={{ backgroundColor: "#ffffff", borderRadius: "10px", p: 3 }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img
                    alt="comma"
                    src={quoteImg}
                    style={{ width: "32px", height: "32px" }}
                  />
                  <Rating value={testimonials[0].start} readOnly />
                </Box>

                <Typography sx={{ textAlign: "center", color: "#555" }}>
                  {testimonials[0].desc}
                </Typography>
                <Box sx={{ display: "flex", mt: "10px", alignItems: "center" }}>
                  <Avatar
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    sx={{ width: 80, height: 80, mb: 2, mr: "20px" }}
                  />
                  <Typography sx={{ fontWeight: 600, mb: 2 }}>
                    {testimonials[0].name}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index + 1 ? "#ffffff" : "#888",
              mx: 1,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonial;
