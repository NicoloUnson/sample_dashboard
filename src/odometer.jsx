import React from 'react'
import {Line} from 'react-chartjs-2'

export default function Odometer() {
    return (
        <div>
            <Line
            data = {{
                labels:['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
                datasets:[{
                    label:"Odometer",
                    data: [1000,700,600,420,300,700,600]
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
