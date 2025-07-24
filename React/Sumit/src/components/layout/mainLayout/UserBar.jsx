import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Modal, // Import Modal
  Button, // Import Button for modal content (optional)
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

// Import desired icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function UserBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl); // Renamed to avoid conflict with modal 'open'

  // New state for modal visibility
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    // Renamed for clarity
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          px: 2,
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1px",
          // zIndex: 9998,
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#000080", fontWeight: "bold" }}
        >
          Census Management and Monitoring system
        </Typography>

        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#000080",
              fontWeight: "bold",
              color: "#138808",
              "&:hover": {
                color: "#ff9933",
              },
              cursor: "pointer",
            }}
          >
            Pre-census
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#000080",
              fontWeight: "bold",
              color: "#138808",
              "&:hover": {
                color: "#ff9933",
              },
              cursor: "pointer",
            }}
          >
            During-census
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#000080",
              fontWeight: "bold",
              color: "#138808",
              "&:hover": {
                color: "#ff9933",
              },
              cursor: "pointer",
            }}
          >
            Post-census
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 2,
              whiteSpace: "nowrap",
            }}
          >
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                mr: 1,
                fontSize: "0.700rem",
                width: 28,
                height: 28,
                cursor: "pointer",
              }}
              onClick={handleClick}
              aria-controls={openMenu ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
            >
              PK
            </Avatar>
            <Typography
              variant="body2"
              sx={{ color: "#4CAF50", fontWeight: "bold", cursor: "pointer" }}
              onClick={handleClick}
              aria-controls={openMenu ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
            >
              Piyush Kirode: HQA
            </Typography>

            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={openMenu} // Use openMenu here
              onClose={handleCloseMenu} // Use handleCloseMenu here
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "white",
                  marginTop: "8px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                },
              }}
            >

              <MenuItem
                onClick={handleCloseMenu} // Still closes the menu
                sx={{
                  color: "#000080",
                  "&:hover": {
                    backgroundColor: "#ff9933",
                    color: "white",
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#000080" }}>
                  <LogoutOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="subtitle2">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
}
