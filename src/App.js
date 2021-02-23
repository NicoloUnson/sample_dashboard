import React, { useState } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Odometer from './odometer'
import Utilization from './utilization';
import Table from './basictable';
import CompareTable from './comparetable';
import Averages from "./averages";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "whitesmoke",
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: `3px solid #FFD700`,
    backgroundColor: "#EAF8F3",
  },
  container: {
    height: '90vh',
    maxWidth: '85vw',
    marginTop: "15px"
  },
  top_title_boxes: {
    marginTop: "-32px",
    marginLeft: "10px",
    backgroundColor: "#EAF8F3",
    width: "100px",
    border: "3px solid #FFD700"
  },
  bottom_title_boxes: {
    marginTop: "-32px",
    marginLeft: "10px",
    backgroundColor: "#EAF8F3",
    width: "150px",
    border: "3px solid #FFD700"
  },
  top_bottom_title_box: {
    marginTop: "-35px",
    marginLeft: "10px",
    backgroundColor: "#EAF8F3",
    width: "200px",
    border: "3px solid #FFD700"
  },
  top_bottom_title: {
    marginTop: "3px",
  },
  table_css: {
    marginTop: "100px",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  },
}));

const createData = (x, y, z) => {
  return { x, y, z }
}

const efficiencyData = [
  createData('ABC-123', '89%', '87'),
  createData('DEF-123', '85%', '60'),
  createData('GHI-123', '73%', '77'),
  createData('JKL-123', '70%', '89'),
  createData('MNO-123', '69%', '68')
]

const efficiencyCol = {
  x: 'Plate Number',
  y: 'Run Time %',
  z: 'Engine Hrs'
}

const engineRunTime = [
  createData('ABC-123', '87', '140'),
  createData('DEF-123', '60', '130'),
  createData('GHI-123', '77', '115'),
  createData('JKL-123', '89', '112'),
  createData('MNO-123', '68', '90')
]

const engineRunTimeCol = {
  x: 'Plate Number',
  y: 'Engine Hrs',
  z: 'Distance Travelled'
}

const createTableData = (x, y, z, a) => {
  return { x, y, z, a }
}

const compareTableData = [
  createTableData('ABC-123', '87', 'XYZ-699', '140'),
  createTableData('DEF-123', '60', 'CVB-420', '130'),
  createTableData('GHI-123', '77', 'BNM-619', '115'),
  createTableData('JKL-123', '89', 'QWE-321', '112'),
  createTableData('MNO-123', '68', 'JJJ-556', '90')
]

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function App() {
  const [last_updated, setLastUpdated] = useState("Today");
  const [top_bottom, setTopBottom] = useState("Engine Runtime");
  const classes = useStyles();
  const rows = efficiencyData
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            MASSIVE! Dashboard
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid border item lg={5} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Box className={classes.top_title_boxes}>
                <Typography>Utilization</Typography>
              </Box>
              <Utilization />
              <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <i>Utilization is number of garaged units</i>
                        <hr class="solid" />
                        <i>Last Updated: { last_updated }</i>
                      </React.Fragment>
                    }
                  >
                    <IconButton>
                      <HelpOutlineIcon />
                    </IconButton>
                  </HtmlTooltip>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Box className={classes.top_title_boxes}>
                <Typography>Odometer</Typography>
              </Box>
              <Odometer />
              <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <i>Odometer is the average kilometers travelled.</i>
                        <hr class="solid" />
                        <i>Last Updated: { last_updated }</i>
                      </React.Fragment>
                    }
                  >
                    <IconButton>
                      <HelpOutlineIcon />
                    </IconButton>
                  </HtmlTooltip>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={2} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Box className={classes.top_title_boxes}>
                <Typography>Averages</Typography>
              </Box>
              <Averages />
              <Grid container>
                <Grid item xs={8} />
                <Grid item xs={4}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <i>Averages show the average value of these values.</i>
                        <hr class="solid" />
                        <i>Last Updated: { last_updated }</i>
                      </React.Fragment>
                    }
                  >
                    <IconButton>
                      <HelpOutlineIcon />
                    </IconButton>
                  </HtmlTooltip>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Box className={classes.bottom_title_boxes}>
                <Typography>Efficiency</Typography>
              </Box>
              <Table className={classes.table_css} rows={rows} colName={efficiencyCol} />
              <Grid container>
                <Grid item xs={8} />
                <Grid item xs={4}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <i>Top or Bottom Five of Efficiency data.</i>
                        <hr class="solid" />
                        <i>Last Updated: { last_updated }</i>
                      </React.Fragment>
                    }
                  >
                    <IconButton>
                      <HelpOutlineIcon />
                    </IconButton>
                  </HtmlTooltip>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Box className={classes.bottom_title_boxes}>
                <Typography>Engine Runtime</Typography>
              </Box>
              <Table className={classes.table_css} rows={engineRunTime} colName={engineRunTimeCol} />
              <Grid container>
                <Grid item xs={8} />
                <Grid item xs={4}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <i>Top or Bottom Five of Engine Runtime data.</i>
                        <hr class="solid" />
                        <i>Last Updated: { last_updated }</i>
                      </React.Fragment>
                    }
                  >
                    <IconButton>
                      <HelpOutlineIcon />
                    </IconButton>
                  </HtmlTooltip>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Box className={classes.top_bottom_title_box}>
                <Grid container>
                  <Grid item xs={2}>
                    <IconButton size="small">
                      <ChevronLeftOutlinedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography className={classes.top_bottom_title}>{top_bottom}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton size="small">
                      <ChevronRightOutlinedIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
              <CompareTable className={classes.table_css} rows={compareTableData} />

              <Grid container>
                <Grid item xs={8} />
                <Grid item xs={4}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <i>Comparison table for { top_bottom }.</i>
                        <hr class="solid" />
                        <i>Last Updated: { last_updated }</i>
                      </React.Fragment>
                    }
                  >
                    <IconButton>
                      <HelpOutlineIcon />
                    </IconButton>
                  </HtmlTooltip>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}



// Color Scheme:
// #ADD4DC
// #EAF8F3
// #37858D
// #1F5068
// #F8FBFA
// #DBAC3D
