import React from 'react'
import ChartOne from '../Components/Chart';
import { Grid, Paper } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import manager from '../Imgs/Navbarimgs/manager-one.svg'
import manager2 from '../Imgs/Navbarimgs/manager2.svg'


function Managers() {
  return (
    <div className='body'>
    <Grid container spacing={3} className='body-one'>
    
    <Grid xs={6} className='grid-one'>
    <div className='left-body'>
    <div className='leftbody-bold'>Team login stats</div>  
   <div>This week</div>
   </div>

   <Grid container >
      <Grid xs={6}>
        {/* <div className='paper-div'> */}
       <Paper className='paper-left'>
        <div className='gridIn-leftgrid'>
            <div>
                <div className='paper-text'>PEOPLE LOGGED IN</div>
                 <div className='paper-centertext'>32/100</div> 
            </div>
            <div><img src={manager} /></div>
        </div>
             <div className='view'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div>
       </Paper>
        
        </Grid>
        
        <Grid xs={6}>
       <Paper className='paper-left'>
        <div className='gridIn-leftgrid'>
            <div>
                <div className='paper-text'>PEOPLE LOGGED IN</div>
                 <div className='paper-centertext'>32/100</div> 
            </div>
            <div><img src={manager2} /> </div>
        </div>
             <div className='view'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div>
       </Paper>
        
        </Grid>

        <Grid xs={6}>
       <Paper className='paper-left'>
        <div className='gridIn-leftgrid-one'>
            <div>
                <div className='paper-text'>PEOPLE ON LEAVE</div>
                 <div className='paper-centertext'>12 this week</div> 
            </div>
            <div><img src={manager} /></div>
        </div>
             {/* <div className='view'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div> */}
       </Paper>
        
        </Grid>
        
        <Grid xs={6}>
       <Paper className='paper-left'>
        <div className='gridIn-leftgrid-one'>
            <div>
                <div className='paper-text'>AVG.WORKING HOURS</div>
                 <div className='paper-centertext'>6 Per person</div> 
            </div>
            <div><img src={manager2} /></div>
        </div>
             {/* <div className='view'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div> */}
       </Paper>
        
        </Grid>

        <Grid xs={6}>
       <Paper className='paper-left'>
        <div className='gridIn-leftgrid-one'>
            <div>
                <div className='paper-text'>AVG.WORKING HOURS</div>
                 <div className='paper-centertext'>6 Per person</div> 
            </div>
            <div><img src={manager}/></div>
        </div>
             {/* <div className='view'>
                <div>View captured images<ChevronRightOutlinedIcon /></div>
                  <div></div>
             </div> */}
       </Paper>
        
        </Grid>
          </Grid>
        

       
    </Grid>

    <Grid xs={5} className='grid-two'>
    <div className='gridtwo-flex'>
    <div>Team login stats</div>
    </div>
    <div><ChartOne /></div>
    
    </Grid>

    </Grid>
 

   
  </div>
  )
}

export default Managers
