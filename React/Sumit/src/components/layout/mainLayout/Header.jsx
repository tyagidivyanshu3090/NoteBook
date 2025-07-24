import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Correct
        // zIndex: 9998,
        paddingRight: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src="/Orgi.png" alt="Site Logo" />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "#000080", fontWeight: "bold" }}
          >
            Census of India
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Office of the Registrar General & Census Commissioner, India
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Ministry of Home Affairs, Government of India
          </Typography>
        </Box>
      </Box>
      <img src="/Ministry.png" alt="Site Logo" className="header-logo" />
    </Box>
  );
}
