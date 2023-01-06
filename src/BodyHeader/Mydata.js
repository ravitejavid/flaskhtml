import { Grid, Paper } from '@mui/material'
import React from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import red from "../Imgs/DataImgs/red.svg"
import calender from '../Imgs/DataImgs/calender.svg'
import rightarrow from '../Imgs/DataImgs/rightarrow.svg'
import leftarrow from '../Imgs/DataImgs/leftarrow.svg'
import '../Css/MyData.css'
import ChartOne from '../Components/Chart';
import login from '../Imgs/DataImgs/loginTime.svg'

function Mydata() {
  return (
    <div>
      <div className='Mydata-Div'>
         <Grid container className='Body-Data-one'>
              <Grid xs={6} className='Data-gridOne'>
              <div className='left-body-data'>
              <div className='leftbody-bold-data'>Daily data</div>  
               
              <div className='data-cardHeadderRight'>
                <div><img src={leftarrow} alt="leftarrow" /></div>
                <div> Today</div>
                <div><img src={calender} alt="calender" /></div>
                <div><img src={rightarrow} alt="rightarrow" /></div>
              </div>
            
              </div>

              <Grid container>
              <Grid xs={6}>
      
       <Paper className='Datapaper-left'>
        <div className='DatagridIn-leftgrid'>
            <div>
                <div className='paperData-text'>Active Time</div>
                 <div className='datapaper-centertext'>00:24:04</div> 
            </div>
            <div><img src={red} /></div>
        </div>
             
       </Paper>
        
        </Grid>

        <Grid xs={6}>
      
       <Paper className='Datapaper-left'>
        <div className='DatagridIn-leftgrid'>
            <div>
                <div className='paperData-text'>Active Time</div>
                 <div className='datapaper-centertext'>00:24:04</div> 
            </div>
            <div><img src={red} /></div>
        </div>
             
       </Paper>
        
        </Grid>

        <Grid xs={6}>
       
       <Paper className='Datapaper-left'>
        <div className='DatagridIn-leftgrid-line'>
            <div>
                <div className='paperData-text'>Login Time</div>
                 <div className='datapaper-centertext'>32/100</div> 
            </div>
            <div><img src={login} /></div>
        </div>
             <div className='Dataview'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div>
       </Paper>
        
        </Grid>

        <Grid xs={6}>
       
       <Paper className='Datapaper-left'>
        <div className='DatagridIn-leftgrid-line'>
            <div>
                <div className='paperData-text'>Login Time</div>
                 <div className='datapaper-centertext'>32/100</div> 
            </div>
            <div><img src={login} /></div>
        </div>
             <div className='Dataview'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div>
       </Paper>
        
        </Grid>

        <Grid xs={12}>
       
       <Paper className='Datapaper-left-12'>
        <div className='DatagridIn-leftgrid-noline'>
            <div>
                <div className='paperData-text'>TIMELINE</div>
                 <div className='datapaper-centertext'>11:47</div> 
            </div>
            {/* <div><img src={red} /></div> */}
        </div>
             {/* <div className='Dataview'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div> */}
       </Paper>
        
        </Grid>
              </Grid>
              </Grid>

              <Grid xs={5} className='Data-gridtwo'>
    <div className='datagridtwo-flex'>
    <div>This week</div>
      <div>Data</div>
    </div>
    <div className='chartmargin'><ChartOne /></div>
    
    </Grid>
         </Grid>
      </div>
    </div>
  )
}

export default Mydata
