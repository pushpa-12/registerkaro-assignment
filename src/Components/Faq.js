import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useMediaQuery,
  Box,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Faq = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Grid container sx={{ p: "30px" }}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, fontWeight: 400 }}> FAQ</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: "24px", md: "32px" } }}>
          Frequent Ask Questions
        </Typography>
      </Grid>
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "80%",
          margin: "0 auto",
          padding: isSmallScreen ? "1rem" : "2rem",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Accordion
            key={index}
            sx={{
              borderLeft: "5px solid",
              borderColor: "linear-gradient(180deg, #FFA229 0%, #1C4670 84.9%)",
              position: "relative",
              mb: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
            >
              <Typography>
                Can I recover deleted files from desktop with this software?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada elit non euismod facilisis. Aliquam ac rutrum sapien.
                Vivamus eleifend lorem eu mauris tincidunt, in euismod sem
                faucibus.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

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
          Show more
        </Button>
      </Grid>
    </Grid>
  );
};

export default Faq;