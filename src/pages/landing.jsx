import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function LandingPage() {
  return (
    <Box
      id="landing"
      sx={(theme) => ({
        width: "100%",
        // backgroundImage:
        //   theme.palette.mode === "light"
        //     ? "linear-gradient(180deg, #CEE5FD, #FFF)"
        //     : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",

        // backgroundImage: `url(/volunteer.png)`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 2rem)",
            }}
          >
            Find your&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3.5rem, 10vw, 2rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              people
            </Typography>
          </Typography>
          <Typography variant="h5" align="center" fontWeight="normal">
            Stop clots together
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={4}
            sx={{ pt: 10, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "200px", height: "60px", fontSize: "1.25rem" }} // Bigger size\
              href="/home"
            >
              Find
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "200px", height: "60px", fontSize: "1.25rem" }} // Bigger size
              href="/hostform"
            >
              Host
            </Button>
          </Stack>

          {/* <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Typography> */}
          {/* <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button variant="contained" color="primary">
              Join now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
      </Container>
    </Box>
  );
}
