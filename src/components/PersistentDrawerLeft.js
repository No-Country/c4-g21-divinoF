import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import InventoryIcon from '@mui/icons-material/Inventory';
import image from "../assets/divino-logo.png"
import vinedo from "../assets/viñedo-1.png"
import wineImage1 from "../assets/WineImage.png"
import wineImage2 from "../assets/image-12.png"
import Bodega1 from "../assets/image-5.png"
import Bodega2 from "../assets/image-7.png"
import IconPatrocinio1 from "../assets/image-1.png"
import IconPatrocinio2 from "../assets/image-2.png"
import IconPatrocinio3 from "../assets/image-3.png"
import IconPatrocinio4 from "../assets/image-4.png"
import IconPatrocinio9 from "../assets/image-9.png"
import IconPatrocinio10 from "../assets/image-10.png"
import IconPatrocinio11 from "../assets/image-11.png"


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar className="drawer" position="fixed" open={open}>
              <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div">
                      <img src={image} alt="icon" />
                  </Typography>
              </Toolbar>
          </AppBar>
          <Drawer
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
              <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                      {theme.direction === "ltr" ? (
                          <ChevronLeftIcon />
                      ) : (
                          <ChevronRightIcon />
                      )}
                  </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
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
                      <ListItem button key={item.name}>
                          <ListItemIcon>
                              {/*  { [<HomeIcon/>,,,,
                
              ]
              } */}
                              {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                      </ListItem>
                  ))}
              </List>
              <Divider />
              <List>
                  {["Logout", "Darkmode"].map((text, index) => (
                      <ListItem button key={text}>
                          <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                      </ListItem>
                  ))}
              </List>
          </Drawer>
          <Main open={open}>
              <DrawerHeader />
              <div>
                  <Typography paragraph variant="h3">
                      Próximos eventos
                      <br />
                  </Typography>
                  <Typography paragraph>
                      <img src={vinedo} alt="icon" />
                      Viñendo Nébula
                  </Typography>
              </div>
              <div>
                  <Typography paragraph variant="h4">
                      Vino destacado de la semana
                      <br />
                      <Typography paragraph variant="h6">
                          Paua Bau
                          <br />
                          Rico aroma, con impronta y de final amable. En nariz
                          se destaca mucha fruta fresca roja, de intensidad
                          media en boca lo que lo convierte en un tinto fácil de
                          tomarlo.
                      </Typography>
                      <img src={wineImage1} alt="icon" />
                  </Typography>
              </div>
              <div>
                  <Typography variant="h4">Bodegas destacadas</Typography>
                  <div>
                      <Typography>
                          Desde sus inicios, la bodega persigue un camino
                          fuertemente marcado por su obsesión y respeto por la
                          naturaleza. Los pilares fundamentales de la producción
                          en Achaval-Ferrer, tienen foco en la mínima
                          intervención necesaria entre la tierra y la copa.
                      </Typography>
                      <img src={Bodega1} alt="icon" />
                  </div>
                  <div>
                      <Typography>
                          Nuestros vinos tienen un delicado equilibrio entre
                          azúcar y acidez. Las uvas blancas nos regalan vinos
                          etéreos y aromáticos, mientras los tintos son robustos
                          y expresivos. Todos revelan un estilo definido y
                          equilibrado entre el clasismo y la modernidad. Cada
                          uno de nuestros vinos contiene el espíritu y la
                          esencia de la tierra patagónica.
                      </Typography>
                      <img src={Bodega2} alt="icon" />
                  </div>
              </div>

              <div>
                  <img src={wineImage1} alt="icon" />
                  <img src={wineImage2} alt="icon" />
              </div>

              <div>
                  <Typography variant="h4">Bodegas partner</Typography>
                  <img src={IconPatrocinio1} alt="icon" />
                  <img src={IconPatrocinio2} alt="icon" />
                  <img src={IconPatrocinio3} alt="icon" />
                  <img src={IconPatrocinio4} alt="icon" />

                  <img src={IconPatrocinio9} alt="icon" />
                  <img src={IconPatrocinio10} alt="icon" />
                  <img src={IconPatrocinio11} alt="icon" />
              </div>
          </Main>
      </Box>
  );
}