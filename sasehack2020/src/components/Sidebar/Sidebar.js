import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import InfoIcon from "@material-ui/icons/Info";
import { Link, withRouter } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { history } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "Record",
      icon: <PersonIcon />,
      onClick: () => history.push("/record"),
    },
    {
      text: "Appointment",
      icon: <DateRangeIcon />,
      onClick: () => history.push("/appointment"),
    },
    {
      text: "Doctor",
      icon: <LocalHospitalIcon />,
      onClick: () => history.push("/doctor"),
    },
    {
      text: "Info",
      icon: <InfoIcon />,
      onClick: () => history.push("/information"),
    },
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Remote healthcare
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          {/* <Link to="/record">
            <ListItem button key="Record">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Record" />
            </ListItem>
          </Link>

          <ListItem button key="Appointment">
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <ListItemText primary="Appoinment" />
          </ListItem>

          <ListItem button key="Doctor">
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="Doctor" />
          </ListItem>

          <ListItem button key="Information">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Information" />
          </ListItem> */}
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};

export default Sidebar;

// ------------------------------------------------------------------

// import React from "react";
// import {
//   Drawer as MUIDrawer,
//   ListItem,
//   List,
//   ListItemIcon,
//   ListItemText,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { BrowserRouter as Router, withRouter } from "react-router-dom";

// const useStyles = makeStyles({
//   drawer: {
//     width: "190px",
//   },
// });

// const Drawer = (props) => {
//   const { history } = props;
//   const classes = useStyles();
//   const itemsList = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//       onClick: () => history.push("/"),
//     },
//     {
//       text: "Record",
//       icon: <PersonIcon />,
//       onClick: () => history.push("/record"),
//     },
//     {
//       text: "Appointment",
//       icon: <DateRangeIcon />,
//       onClick: () => history.push("/appointment"),
//     },
//     {
//       text: "Doctor",
//       icon: <LocalHospitalIcon />,
//       onClick: () => history.push("/doctor"),
//     },
//     {
//       text: "Information",
//       icon: <InfoIcon />,
//       onClick: () => history.push("/information"),
//     },
//   ];
//   return (
//     <Router>
//       <MUIDrawer variant="permanent" className={classes.drawer}>
//         <List>
//           {itemsList.map((item, index) => {
//             const { text, icon, onClick } = item;
//             return (
//               <ListItem button key={text} onClick={onClick}>
//                 {icon && <ListItemIcon>{icon}</ListItemIcon>}
//                 <ListItemText primary={text} />
//               </ListItem>
//             );
//           })}
//         </List>
//       </MUIDrawer>
//     </Router>
//   );
// };

// export default withRouter(Drawer);
