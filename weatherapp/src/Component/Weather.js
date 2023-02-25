import React from 'react'
import "./Weather.css"
import {FiSun } from "react-icons/fi";
import {FiCloud } from "react-icons/fi";
import {FiCloudRain} from "react-icons/fi";
import {CiCloudSun} from "react-icons/ci";
import {WiDaySunnyOvercast} from "react-icons/wi";
import {WiDegrees} from "react-icons/wi";

export default function Weather() {
  return (
    <div   className='container'>
        <div className='subcontainer'>
            <div className='right'>

              <h3 className='text'>Welcome back Isabella!</h3>
              <p  className='text'>Check out todat's weather information</p>
            <div className='upcoming'>
              <div className='upcommingsec'>
                 <p>Upcoming hours </p>    
               <select>
                <option> Rain precipition</option>  
               </select> 
                  <select>
                <option> Next day</option>
               </select>
              </div>
              <div className='temp'>
                 <div className="time">
                <p>Now</p>
                <p>11:00</p>
                <p>12:00</p>
                <p>13:00</p>
                <p>14:00</p>
                <p>15:00</p>
                <p>16:00</p>
                <p>17:00</p>
      
                 </div>
                 <div className="time">
                  
                  
                    <FiSun className='icon'/>
             
                    <WiDaySunnyOvercast className='icon'/>
                  
                    <FiCloudRain className='icon'/>
                    <FiCloud className='icon'/>
                   <FiSun className='icon'/>
                  <CiCloudSun className='icon'/>
                  <FiCloud className='icon'/> 
                 < FiSun className='icon'/> 
                  
                 </div>
                 <div className="time">
                 <p>27 <WiDegrees/></p>
                 <p>28 <WiDegrees/></p>
                 <p>28 <WiDegrees/></p>
                 <p>29 <WiDegrees/></p>
                 <p>30 <WiDegrees/></p>
                 <p>29 <WiDegrees/></p>
                 <p>29 <WiDegrees/></p>
                 <p>28 <WiDegrees/></p>
                 </div>
                <div className='data'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className='time'>
                 <p>23%</p>
                 <p>29%</p>
                 <p>58%</p>
                 <p>75%</p>
                 <p>33%</p>
                 <p>20%</p>
                 <p>73%</p>
                 <p>49%</p>
              </div>
            </div>
            <p  className='text'>More details of today's weather</p>
           <div className="detail">
               <div>
                 <div className='humidity'>
                   <p>humidity</p>
                  <div className='humid'><img  src='https://cdn-icons-png.flaticon.com/512/2938/2938122.png'/></div>  
                 </div>
                 <div className='textarea'> 
                   85%
                   <img   className='bad' src="https://c8.alamy.com/comp/2GX6MW0/emotional-scale-with-arrow-from-green-to-red-and-face-icons-2GX6MW0.jpg" />
                   </div>
               </div>
               {/* //2// */}
               <div>

               <div className='humidity'>
                   <p>Wind</p>
                  <div className='humid'><img  src='https://cdn-icons-png.flaticon.com/512/1247/1247767.png'/></div>  
                 </div>
                 <div className='textarea'> 
                  8km/h
                   <img   className='bad' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/wind-speed-2216551-1848126.png" />
                   </div>
               </div>
               {/* 3 */}
               <div>
               <div className='humidity'>
                   <p>Precipation </p>
                  <div className='humid'><img  src='https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-icon-2.png'/></div>  
                 </div>
                 <div className='textarea'> 
                   1.4cm
                   <img   className='bad' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm7tCbOuNMne1fXtyAqpZkhUnJZQi1Kq6MA&usqp=CAU" />
                   </div>
               </div>
               {/* 4 */}
               <div>
               <div className='humidity'>
                   <p>Precipation </p>
                  <div className='humid'><img  src='https://cdn-icons-png.flaticon.com/512/4005/4005885.png'/></div>  
                 </div>
                 <div className='textarea'> 
                  4 medium
                   <img   className='bad' src="https://www.uvindextoday.com/img/uv-index-scale.jpeg" />
                   </div>
               </div>
               {/* 5 */}
               <div>
               <div className='humidity'>
                   <p>Precipation </p>
                  <div className='humid'><img  src=' https://icon-library.com/images/temperature-icon/temperature-icon-13.jpg'/></div>  
                 </div>
                 <div className='textarea'> 
                  30<WiDegrees/>
                   <img   className='bad' src=" https://img.freepik.com/premium-vector/hot-cold-temperature-icon-sun-snowflake_123447-4356.jpg?w=2000" />
                   </div>
               </div>
               {/* 6*/}
               <div>
               <div className='humidity'>
                   <p>Precipation </p>
                  <div className='humid'><img  src='https://www.clipartmax.com/png/middle/11-115287_clipart-rain-umbrella-rain-umbrella-clip-art.png'/></div>  
                 </div>
                 <div className='textarea'> 
                  42% 
                   <img   className='bad' src=" https://c8.alamy.com/comp/PE7CJ5/temperature-PE7CJ5.jpg" />
                   </div>
               </div>
               
           </div>
            </div>
             
        </div>
    </div>
  )
}
