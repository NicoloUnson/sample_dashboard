import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';

export default function Averages() {
  const [odometer, setodometer] = useState(236);
  const [engine_runtime, setEngineRuntime] = useState(150);
  const [utilization, setUtilization] = useState(15);

    return (
        <div style={{backgroundColor: "#EAF8F3"}}>
            <Typography variant="h5" align="left">Odometer:</Typography>
            <Typography variant="h6" align="right">{odometer} km/day</Typography>
            <Typography variant="h5" align="left">Engine Runtime</Typography>
            <Typography variant="h6" align="right">{engine_runtime} hours/day</Typography>
            <Typography variant="h5" align="left">Utilization</Typography>
            <Typography variant="h6" align="right">{utilization} units</Typography>
        </div>
    )
}
