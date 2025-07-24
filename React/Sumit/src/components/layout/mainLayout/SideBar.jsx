import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Toolbar,
  Box,
  Divider,
  Typography,
  Tooltip,
} from "@mui/material";

import {
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Report as ReportIcon,
  School as SchoolIcon,
  AddBox as AddBoxIcon,
  GroupAdd as GroupAddIcon,
  Cancel as CancelIcon,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Close as CloseIcon,
  Logout as LogoutIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCredentials } from "../../../store/Auth/Reducer";


export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.jwtAuthentication);
  const [openTraining, setOpenTraining] = useState(true);
  const [openUser, setOpenUser] = useState(false);
  const [openHome, setOpenHome] = useState(true);
  const [openSelfEnum, setOpenSelfEnum] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!auth || !auth.jwt) return null;


  const handleDrawerToggle = () => setSidebarOpen((prev) => !prev);

  const toggleSection = (sectionSetter, ...others) => {
    sectionSetter((prev) => {
      others.forEach((setOther) => setOther(false));
      return !prev;
    });
  };

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/login");
  };

  const handleOpenPage = () => {
    navigate("/self-enum-hlo");
  };


  const renderListItems = (items) =>
    items.map((item, index) => (
      <ListItem
        key={index}
        button
        component={Link}
        to={item.path}
        sx={{
          pl: sidebarOpen ? 4 : 0,
          borderRadius: "6px",
          margin: "4px 4px 0px 0px",
          backgroundColor: location.pathname.startsWith(item.path)
            ? "#ff9933"
            : "white",
          "&:hover": {
            backgroundColor: "#ff9933",
          },
          justifyContent: sidebarOpen ? "flex-start" : "center",
          minHeight: "48px",
        }}
      >
        <ListItemIcon
          sx={{
            color: location.pathname.startsWith(item.path)
              ? "white"
              : "#000080",
          }}
        >
          {item.icon}
        </ListItemIcon>
        {sidebarOpen && (
          <ListItemText
            sx={{
              color: location.pathname.startsWith(item.path)
                ? "white"
                : "#000080",
            }}
            primary={item.text}
          />
        )}
      </ListItem>
    ));

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: sidebarOpen ? "300px" : "70px",
        flexDirection: "column",
        boxShadow: "4px 0 10px rgba(0, 0, 0, 0.1)",
        transition: "width 0.3s ease-in-out",
        overflowX: "hidden",
        display: "flex",
        position: "sticky",
        top: 0,
        // height: "100vh",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: sidebarOpen ? "space-between" : "center",
          minHeight: "64px",
          alignItems: "center",
        }}
      >
        {sidebarOpen && <Typography>Overview</Typography>}
        <Tooltip title={!sidebarOpen ? "Toggle Sidebar" : ""}>
          <IconButton onClick={handleDrawerToggle} color="inherit">
            {sidebarOpen ? (
              <CloseIcon sx={{ color: "#000080" }} />
            ) : (
              <MenuIcon sx={{ color: "#000080" }} />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>

      <Divider sx={{ my: 1, mx: 1 }} />

      <List>
        {/* Self Enumeration Section */}
        <ListItem
          button
          onClick={handleOpenPage}
          sx={{
            pl: sidebarOpen ? 2 : 0,
            borderRadius: "6px",
            cursor: "pointer",
            justifyContent: sidebarOpen ? "flex-start" : "center",
            minHeight: "30px",
          }}
          
        >
          <ListItemIcon sx={{
          display: "flex",
          justifyContent: sidebarOpen ? "space-between" : "center",
          minHeight: "64px",
          alignItems: "center",
          color: "#000080"
        }}>
            <SchoolIcon />
          </ListItemIcon>
         
           {sidebarOpen && <ListItemText primary="Self-Enumeration(HLO)" sx={{ color: "#000080" }} />}
         
        </ListItem>
      </List>

      {/* Logout */}
      <List>
        <Divider sx={{ my: 1, mx: 1 }} />
        <ListItem
          button
          onClick={handleLogout}
          sx={{
            justifyContent: sidebarOpen ? "flex-start" : "center",
            pl: sidebarOpen ? 2 : 0,
            color: "red",
          }}
        >
          <ListItemIcon  sx={{
            pl: sidebarOpen ? 2 : 0,
            borderRadius: "6px",
            cursor: "pointer",
            justifyContent: sidebarOpen ? "flex-start" : "center",
            minHeight: "30px",
            color: "red",
          }}
          >
            <LogoutIcon />
          </ListItemIcon>
          {sidebarOpen && <ListItemText primary="Logout" />}
        </ListItem>
      </List>
    </Box>
  );
}
