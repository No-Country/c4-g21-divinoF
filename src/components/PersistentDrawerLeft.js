import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import InventoryIcon from "@mui/icons-material/Inventory";
import image from "../assets/divino-logo.png";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";


import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        
    }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    
}));

const useStyles = makeStyles((theme) => ({
  
    // Styling material components
    root: {
     
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down("xs")]: {
          paddingTop: theme.spacing(2),
        },
      },
  
    /* LightTheme : {
        pageBackground: "white",
        titleColor: "#dc658b",
        tagLineColor: "black"
      },
    DarkTheme : {
        pageBackground: "#282c36",
        titleColor: "lightpink",
        tagLineColor: "lavender"
      } */

  }));

export default function PersistentDrawerLeft( {  toggleDark, settoggleDark } ) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleModeChange = () => {
        settoggleDark(!toggleDark);
        console.log(toggleDark)
      };
      const classes = useStyles();


    return (
        <Box  sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar id="drawer" className={classes.root} position="fixed" open={open}>
                <Toolbar className="DrawerStyles">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack spacing={2} direction="row" className="drawer-btns">
                        <Link to="/register">
                            <Button variant="outlined" className="register-btn" startIcon={<AppRegistrationIcon/>}>Registrarme</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant ="contained" className="login-btn" startIcon={<LoginIcon />}>Login</Button>
                        </Link>
                    </Stack>     
                    <Typography variant="h6" noWrap component="div" className="divino-logo" >
                        <Link to="/">
                            <img src={image} alt="icon" />
                        </Link>
                    </Typography>
                </Toolbar>
                
            </AppBar>
            <Drawer className={classes.root}
                sx={{
                    
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader className={classes.root}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List className={classes.root}>
                    {[
                        { name: "Dasboard", icon: <HomeIcon /> },
                        { name: "Revenue", icon: <BarChartIcon /> },
                        {
                            name: "Notifications",
                            icon: <CircleNotificationsIcon />,
                        },
                        { name: "Analytics", icon: <DataSaverOffIcon /> },
                        { name: "Inventory", icon: <InventoryIcon /> },
                    ].map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List  className={classes.root}  >
                    {["Logout", "Darkmode"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}

                    

                </List>
                     <Switch
                            checked={toggleDark}
                            onChange={handleModeChange}
                            name="toggleDark"
                            color="default"
                        />

            </Drawer>
        </Box>
    );
}
