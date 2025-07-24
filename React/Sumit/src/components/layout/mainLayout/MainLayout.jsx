import { Box } from "@mui/material";
import Footer from "../mainLayout/Footer";
import AccessibilityBar from "../mainLayout/AccessibilityBar";
import Header from "../mainLayout/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../mainLayout/SideBar.jsx"; // ✅ Exact file name

import UserBar from "../mainLayout/UserBar";

function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
       
      }}
    >
      {/* Top bars */}
      <AccessibilityBar />
      <Header />
      {/* <UserBar /> */}

      {/* Main content area with background image */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Faint Indian flag background image */}
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

        {/* SideBar + Main content */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            overflowY: "auto",
            height: "76vh", // Adjust as needed
          }}
        >
          <SideBar />
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Outlet /> {/* Nested routed components will render here */}
          </Box>
        </Box>
      </Box>

      {/* Footer always at the bottom */}
      <Footer />
    </Box>
  );
}

export default MainLayout;
