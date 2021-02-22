import React from 'react'
import {Bar} from 'react-chartjs-2'

export default function Utilization() {
    return (
        <div>
            <Bar
                data = {{
                    labels:['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
                    datasets:[{
                        label:"Utilization",
                        data: [6,4,8,10,12,4,6]
                    }]

                }}
                width ={100}
                height = {300}
                options = {{
                    maintainAspectRatio:false
                }}
            />
        </div>
    )
}
