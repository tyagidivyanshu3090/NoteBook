import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { useUserActivity } from "../../../context/UserActivityContext";
export default function AccessibilityBar({
  onFontSizeChange,
  onReset,
  onLanguageToggle,
  currentLanguage = "English",
}) {
  const { lastActivity } = useUserActivity();
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff", // optional background
        px: 2,
        py: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 2,
        marginBottom: "1px",
        // zIndex: 9998,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Correct
      }}
    >
      {lastActivity ? (
        <Typography
          variant="body1"
          component="a"
          href="#main-content"
          tabIndex={0}
          sx={{
            textDecoration: "none",
            color: "#138808",
            "&:hover ": {
              color: "#ff9933",
            },

            fontSize: "0.9rem",
            cursor: "pointer",

            fontWeight: "bold",
          }}
        >
          {lastActivity.actualTime}
        </Typography>
      ) : null}
      <Typography
        variant="body1"
        component="a"
        href="#main-content"
        tabIndex={0}
        sx={{
          textDecoration: "none",
          color: "#138808",
          "&:hover ": {
            color: "#ff9933",
          },

          fontSize: "0.9rem",
          cursor: "pointer",

          fontWeight: "bold",
        }}
      >
        Skip to Main Content
      </Typography>

      <ButtonBase onClick={() => onFontSizeChange("increase")}>
        <Typography
          sx={{ fontSize: "0.9rem", fontWeight: "bold", color: "#000080" }}
          variant="body1"
        >
          A+
        </Typography>
      </ButtonBase>

      <ButtonBase onClick={onReset}>
        <Typography
          variant="body1"
          sx={{ fontSize: "0.9rem", fontWeight: "bold", color: "#000080" }}
        >
          A
        </Typography>
      </ButtonBase>

      <ButtonBase onClick={() => onFontSizeChange("decrease")}>
        <Typography
          variant="body1"
          sx={{ fontSize: "0.9rem", fontWeight: "bold", color: "#000080" }}
        >
          A-
        </Typography>
      </ButtonBase>

      <ButtonBase onClick={onLanguageToggle}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            fontWeight: currentLanguage === "Hindi" ? "bold" : "normal",
            color: "#138808",
            "&:hover ": {
              color: "#ff9933",
            },
          }}
        >
          हिंदी
        </Typography>
      </ButtonBase>

      <ButtonBase onClick={onLanguageToggle}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            fontWeight: currentLanguage === "English" ? "bold" : "normal",
            color: "#138808",
            "&:hover ": {
              color: "#ff9933",
            },
          }}
        >
          English
        </Typography>
      </ButtonBase>
    </Box>
  );
}
