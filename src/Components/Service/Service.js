import React from "react";
import { Button, Grid2, Typography } from "@mui/material";
import payrollImg from "../../Assets/services/payroll.png";
import virtualOfficeImg from "../../Assets/services/virtualOffice.png";
import secretarialServImg from "../../Assets/services/secretarialServices.png";
import companyFormImg from "../../Assets/services/companyFormation.png";
import bookkeepingImg from "../../Assets/services/bookKeeping.png";
import annualCom from "../../Assets/services/annualCompliance.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Service = () => {
  const serviceList = [
    {
      img: companyFormImg,
      title: "Company Formation",
      description: "Build web based solutions that enhace customer experience.",
    },
    {
      img: secretarialServImg,
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      img: virtualOfficeImg,
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      img: annualCom,
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      img: payrollImg,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      img: bookkeepingImg,
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
    },
  ];
  return (
    <Grid2
      container
      sx={{
        backgroundColor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: "30px",
      }}
    >
      <Grid2 item xs={12}>
        <Typography sx={{ fontSize: "14px", color: "#EB8D15" }}>
          {" "}
          WELCOME TO REGISTERKARO.IN
        </Typography>
      </Grid2>
      <Grid2 item xs={12}>
        <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
          Explore Our Services
        </Typography>
      </Grid2>
      <Grid2
        container
        sx={{
          mt: 2,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {serviceList.map((service, index) => {
          return (
            <Grid2
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                borderRight: "2px solid",
                borderColor: "#E5E2DF",
                maxWidth: "400px",
                mb: "10px",
              }}
            >
              <img
                alt={service.title}
                src={service.img}
                style={{ width: "60px", height: "auto", marginBottom: "10px" }}
              />
              <Typography sx={{ fontSize: "20px", fontWeight: 800, mb: 1 }}>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: 300, mb: 1 }}>
                {service.description}
              </Typography>

              <Button endIcon={<ArrowCircleRightOutlinedIcon />}>
                Learn More
              </Button>
            </Grid2>
          );
        })}
      </Grid2>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#1C4670", mt: "10px", mb: "10px" }}
      >
        See All Services
      </Button>
    </Grid2>
  );
};

export default Service;
