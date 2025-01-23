import { Grid } from "@mui/material";
import React from "react";
import com1 from "../Assets/company/Company1.png";
import com2 from "../Assets/company/Company2.png";
import com3 from "../Assets/company/Company3.png";
import com4 from "../Assets/company/Company4.png";
import com5 from "../Assets/company/Company5.png";
import com6 from "../Assets/company/Company6.png";

const CompanyLogo = () => {
  const companyList = [
    {
      id: 1,
      src: com1,
    },
    {
      id: 2,
      src: com2,
    },
    {
      id: 3,
      src: com3,
    },
    {
      id: 4,
      src: com4,
    },
    {
      id: 5,
      src: com5,
    },
    {
      id: 6,
      src: com6,
    },
  ];

  return (
    <Grid container sx={{ p: { xs: "20px", sm: "30px" }, justifyContent: "center" }}>
      {companyList.map((item) => (
        <Grid item xs={4} sm={2} key={item.id} sx={{ display: "flex", justifyContent: "center", mb: { xs: "10px", sm: "0" } }}>
          <img
            src={item.src}
            alt="company"
            style={{ height: "48px", width: "auto", maxWidth: "100%" }} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyLogo;