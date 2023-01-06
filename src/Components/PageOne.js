import React from 'react'
import Avatar from '@mui/material/Avatar';
import '../Css/PageOne.css'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import Tableone from './Table';
import Router from '../React_Router/Router';
import {NavLink} from 'react-router-dom'
import joinedon from "../Imgs/Navbarimgs/joinedon.svg"
import dob from "../Imgs/Navbarimgs/dob.svg"
import location from "../Imgs/Navbarimgs/location.svg"
import mail from "../Imgs/Navbarimgs/mail.svg"
import mobile from "../Imgs/Navbarimgs/mobile.svg"
import officeloc from "../Imgs/Navbarimgs/officeloc.svg"
import play from "../Imgs/Navbarimgs/play.svg"
import notific from "../Imgs/Navbarimgs/notific.svg"




function PageOne() {
// const navlink = ({isActive}) => {
//   return {
//     textDecoration: isActive ? "none" : "underline",
//     fontWeight: isActive ?"bold" : "normal",
//   }
// }

  return (
    <div className='parentdiv'>
      <div className='Header'>
         <div className='avatarDiv'>
           
            <div className='avatar'> 
                
                <Avatar alt="R" src="https://as1.ftcdn.net/v2/jpg/00/76/30/14/1000_F_76301444_2c3VdnQnqWwVHren56QUQ5w0dN4ewqBo.jpg" id="avatar" />     
            </div>
             <div ><ol className='order-one'>
                <li className='bold'>RaviTeja</li>
                <li className='font-size'>WebDeveloper</li>
                <div className='orderone-li'>
                  <div> <img src={play} alt='play' className='play'/> </div>
               
                <li className='view-one'>  View video</li>
                </div>
                
                </ol>
             </div>

         </div>

     <div className='rightheader-part'>
         <div className='hearderMid'>
          <ol className='order-mid'>
            <div><img src={joinedon} alt='joined'/> <p>joined on:</p><li> jan 2022</li></div>
            <div><img src={dob} alt='joined'/><p>DOB: </p> <li>Apr 1998</li></div>
            <div><img src={location} alt='joined'/> <p>Location :</p> <li>Bengaluru</li></div>
              
          </ol>

         </div>

         <div className='headerLast'>
         <ol className='order-last'>
            <div><img src={mail} alt='joined'/><p>Mail ID:</p> <li>vidatt123@gmail.com</li></div>
           
            <div><img src={mobile} alt='joined'/><p>Mobile:</p><li>3311667798</li></div>
            
            <div><img src={officeloc} alt='joined'/><p className='large-p'>office Location:</p><li className='large-li'>Bengaluru</li></div>
            
          </ol>
         </div>

         </div>
      </div>

      <div className='bodyheader-flex'>
        <ol className='body-header'>
          {/* <li><NavLink style={navlink} to="/">Mydata</NavLink></li>  */}
            <li><NavLink to="/">Mydata</NavLink></li> 
            <li > <NavLink to="/managers">Managers</NavLink></li>
            <li><NavLink to="/employe">Employees</NavLink></li>
            <li><NavLink to="/live">Liveview</NavLink></li>
            <li ><NavLink to="/add" >+Add</NavLink> </li>
        </ol>
        <div><img src={notific} alt='joined'/> </div>
      </div>

      <div >
        
     {/* <Managers /> */}
     <Router />

       
      </div>
      <div className='table-flex'>
          <div><h3>Previous entries</h3></div>

          <div className='search-bar'> 
             <div><SearchIcon /> </div>
             <input type="text" placeholder='Search...'/>
           </div>
       

        <div className='sort-table'>
          <SortIcon />  
          <div>sort by</div>
        </div> </div>

      <div className='Table'>
        <div>
        <Tableone />
        </div>
      </div>
    </div>
  )
}

export default PageOne
