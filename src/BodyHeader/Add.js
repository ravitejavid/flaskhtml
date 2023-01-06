import { Grid, Paper } from '@mui/material'
import React from 'react'
import '../Css/Add.css'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
function Add() {
  return (
    <div>
      <div className='Add-body'>
        <Grid container>
        
            <h2 className='Addbody-one'>Add a Person</h2>

    
          <Grid xs={12} className='Addbody-two'>
             <div className='bodytwo-div'>

             <Grid container>
              <Grid xs={6}>
              <div className='form-add'>
              <label>Name</label>
               <input type="text" placeholder='Ravi'/>
              </div>
              </Grid>

              <Grid xs={6}>
              <div className='form-add'>
              <label>Id</label>
               <input type="text" placeholder='1324151'/>
              </div>
              </Grid>

              <Grid xs={6}>
              <div className='form-add'>
              <label>Role</label>
               <input type="text" placeholder='Ravi'/>
              </div>
              </Grid>

              <Grid xs={5}>
              <div className='form-add'>
              <label>Team</label>
               <input type="text" placeholder='Ravi'/>
              </div>
              </Grid>

              <Grid xs={8} className='form-file'>
               <Paper className='border-file'>

              <div className='filestype'>
               <div>
                 <CloudUploadOutlinedIcon />
               </div>
               <label class="custom-file-upload">
              <div className='file'>
              <input type="file"/>
               Upload </div>
               
               <h4>a 30-60 sec well it 360 video of your face</h4>
               </label>
               <p>Drag and Drop Hear</p>
               </div>
               </Paper>
              </Grid>
             </Grid>
              
             </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Add
