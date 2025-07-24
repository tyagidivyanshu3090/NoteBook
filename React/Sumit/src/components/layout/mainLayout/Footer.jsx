import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff", // optional background
        px: 2,
        py: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        marginBottom: "1px",
        // zIndex: 9998,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Correct
      }}
    >
      <Typography variant="subtitle1" color="#000080">
        © 2025 Website designed & maintained by C-DAC, Delhi.
      </Typography>
    </Box>
  );
}
