import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Icon, IconButton, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import Odometer from './Odometer'
import Utilization from './Utilization';
import Table from './BasicTable';
import CompareTable from './CompareTable'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "whitesmoke",
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: `3px solid #FFD700`
  },
  container: {
    height: '100vh',
    maxWidth: '85vw'
  }
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

export default function App() {
  const [lastUpdated,setLastUpdated] = useState('today')
  const classes = useStyles();
  const rows = efficiencyData
  return (
    <div className={classes.root}>

      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid border item lg={5} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Odometer />
              <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Utilization />
              <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={2} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Typography variant="h3">
                Odometer
              </Typography>
              <Grid container direction="row-reverse">
                <Grid item xs={2}>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Table rows={rows} colName={efficiencyCol} />
              <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <Table rows={engineRunTime} colName={engineRunTimeCol} />
              <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper elevation={7} className={classes.paper}>
              <CompareTable rows={compareTableData} />

              <Grid container>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container direction="row-reverse">
          <Grid item xs={2}>
            <Typography>
              Last updated: {lastUpdated}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}