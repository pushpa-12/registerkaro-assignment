import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Blog = () => {
  const blogList = [
    {
      img: "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGhDAqlFHdNx9OTYmn~YuEo2N9Yj4oYG9sHeds3fLvWEfE1f7sroZqxjZHoKuK1gxuapiL6~fplM52dxtC7pFHuvrCH~7jL-1bEdu6PLsWvnjwnof32T9Y0nPIOM2dK0zQdyFGbVy9XqVvGq47IOYNUdH0USHpMALKwnaX-7rvjf2VwEwY~cIdN4gvjKPCcqFdr1ZOkZW09jcLBkl4RY336qYol-RhYs~RhZt3GmZGcVanQegCurtU8Mur~~RHu-wmbIhdqWah4znLTmyPyErutelIy8~S5745qypbyLyUwJ~DnQBDqHYvynaClXn64stLr-ddq05UV8QR~XL4gVsg__",
      nameWithdate: "Prabhash Mishra • 1 Jan 2023 • Today",
      title: "Small business & Startup",
      decs: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Adult", "Management"],
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mxqNKgRpXToYRoSbTEl2-A33v1Ov9uViNMsW-6Zvl7IH9qSwJGgMjMgvU6e4H166BGIZZQALi7f3auqY-TYLbtqcXa7s6l7wGkBlcqqmp6wpe2yJEXCORgXmDnWEqPJxqCeRHM74n3cSlC10JCksgTgoIc6zGzdaWOH7fM5F72F1okxSAaI7bi4jqTr-k6ypToz3TiEq4qhqbNdYzmZy~GIxz0vigbe0pMXywowCAELH3GTwPXcDyNVQkUN7YYXH4yjRRvP7H5D3DD98SRbH4S2DYwMa7-IO8PqyMzp2LrZFucEjys-MDHVJfKq73zG-kUMf7MRJF~NnZYrG7A97lA__",
      nameWithdate: "Mahesh Kumar • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      decs: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Complience"],
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGhDAqlFHdNx9OTYmn~YuEo2N9Yj4oYG9sHeds3fLvWEfE1f7sroZqxjZHoKuK1gxuapiL6~fplM52dxtC7pFHuvrCH~7jL-1bEdu6PLsWvnjwnof32T9Y0nPIOM2dK0zQdyFGbVy9XqVvGq47IOYNUdH0USHpMALKwnaX-7rvjf2VwEwY~cIdN4gvjKPCcqFdr1ZOkZW09jcLBkl4RY336qYol-RhYs~RhZt3GmZGcVanQegCurtU8Mur~~RHu-wmbIhdqWah4znLTmyPyErutelIy8~S5745qypbyLyUwJ~DnQBDqHYvynaClXn64stLr-ddq05UV8QR~XL4gVsg__",
      nameWithdate: "Rakhi Verma • 1 Jan 2023",
      title: "Growing Business Package",
      decs: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nm74i-cGyYu8ZaFU99f1kc75I5b0XjDB7AnhlytnGLRAyAi25hJ4Z2Ok0Vm2z~u-l1N942l3xbda3TdOJJYQrQFNo5dNA0JvwJHM2AoOVgFTskRhPVn6zpZQMsOKByKvdECXfiv58gFJHLgjtgE5k~f77fJmX2p7CDdC4GhaSo0vOqTa9FktE8xqdkqo7LyvcOtAeeR-mhOi2LUwef0Ax-acxGujB7w4UBLpOAZ8wsvYTzd8FvFj5FuioXJ7jHsSL7AEiFzidcdr8yKXT1tbrXnD4VImzjNGpuXXDcel-rHGyvzAwK6YnpBu3m9AjC1rGZZPR8L4v4XQJbgwAsoyjw__",
      nameWithdate: "Karan Kumar • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      decs: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k211o3vwxYOLc0OLGJaeuZqhf2W9OI13E2rJR7wqzZQ2Q~FzgdwVgC4Stvb8hGSAWbxSom7CM1b7lx8z-zH6jPnBU5-EuHL3~zHTLdaJBJFxhM4x~YRhWzezyOBqdLknKds9hexQK7-~cDiTbXd0jRsLzySVUxjJ9SAUiOzDyHxQ4nKjd87rQHGwAx-7x7IHRs-yh-hVcbncbk3dogw5dfO~T~zbWyHCiMNCsjTNT9CSIeuU1aj2OYGa65T1j7yDYFv4MUt-dK7KUoRKsGL52y2HhiaXYrevx~cQY8HpeUVdu2~3qAD05pGt9OncXREx1Mfo-Me4NEzJ2W9yo~Fw4w__",
      nameWithdate: "Richa Singh • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      decs: "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U2u4mD6neBFruO85Cq7FnP-tQC2CIjiTzzGYBCyQ7cCGIRk9VuT1vXub1PP4SWT2QKUCrq~hguezaTzzAMODGYusKMGvrK8fZQ3xs3aJcm5VDZwqoMpH8BiXJ4vKTc7B7YageG-Ky9MVzlGNNYDOKhROMOz6HUxL4RNVyHMouXZmhAZA2bBnTB8UGf8nMqdvYnlzNYCB-mR--pRiwmI4pSixVuPoJ0bflcPqX3fc3KfqWUjwB-cOLluHos769jHTt8w3r~qs4h50GI4-TKl~YS7Bmn7XM3Ye96gTH9iEANTxWMXqFxjLsRdIRRxbkLRQnC04tQN5W6zWrj6AundEgg__",
      nameWithdate: "Miss Nora• 1 Jan 2023",
      title: "Scale-Up Company Offer",
      decs: "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
    },
  ];

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const lightBackground = `hsl(${hue}, 70%, 85%)`;
    const darkText = `hsl(${hue}, 50%, 30%)`;
    return { background: lightBackground, text: darkText };
  }

  return (
    <Grid container sx={{ p: "30px" }}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography sx={{ fontSize: "14px", color: "#EB8D15", mb: "10px" }}>
          {" "}
          EXPLORE OUR BLOGS
        </Typography>
        <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
          {" "}
          Accelerate Digital Transformation
        </Typography>
      </Grid>
      <Grid container>
        {blogList?.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{
              p: 2,
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <img
              alt={item.title}
              src={item.img}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Box sx={{ p: 2, textAlign: "left" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "gray",
                  mb: 1,
                }}
              >
                {item.nameWithdate}
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  mb: 1,
                  color: "#666",
                }}
              >
                {item.decs}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {item?.tags?.map((tag, index) => {
                  const { background, text } = getRandomColor();
                  return (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: background,
                        color: text,
                        fontWeight: 600,
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "30px",
          mb: "10px",
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowRightAltIcon />}
          sx={{ backgroundColor: "#1C4670", mt: "30px", mb: "10px" }}
        >
          Show more blogs{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Blog;
