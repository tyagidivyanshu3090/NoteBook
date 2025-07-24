import { Box } from "@mui/material";
import Footer from "../mainLayout/Footer";
import AccessibilityBar from "../mainLayout/AccessibilityBar";
import Header from "../mainLayout/Header";
import { Outlet } from "react-router-dom";

function MinimalLayout() {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <AccessibilityBar /> */}
        <Header />

        <Box
          sx={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: 'url("/Indian-flag.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.06,
              zIndex: -1,
            }}
          />

          <Outlet />
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default MinimalLayout;
