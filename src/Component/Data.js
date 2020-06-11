import React, { useState } from 'react';
import './Data.css';

function Content(props) {

    let data = {
        Wb_dev:['Python','JavaScript','Java','Php'],
        wb_design: ['Html','Css','BootStrap'],
        Desktop_app : ['Python','Java','Swift','Ruby'],
        
    }

    let [Pl, setPl] = useState('Web Development');
    let [Data, setData] = useState(data.Wb_dev);
    
     

    return (
        <div>
           

            <div>
                <center>
                <h2>Check Programming Language To Create Web Develoment,Web Design,Desktop App</h2>
                
                <div >
                    <div>
                        <ul >
                            <li>
                                <button  onClick={(get)=> {setPl(get.target.textContent);setData(data.Wb_dev)}}>Web Development</button>
                            </li>
                            <li>
                                <button  onClick={(get)=> {setPl(get.target.textContent);setData(data.wb_design)}} >Web Design</button>
                            </li>
                            <li>
                                <button  onClick={(get)=> {setPl(get.target.textContent);setData(data.Desktop_app)}} >Desktop app</button>
                            </li>
                           
                        </ul>
                    </div>
                    <div >
                        <div >
                            <h3  >Used Programming Language For  {Pl} </h3>
                            <div >
                               
                                {
                                    Data.map((value,index) => {
                                        return <h3 key={index}>{value}</h3>
                                    })
                                }
                               
                            </div>

                        </div>

                    </div>
                </div>
                </center>


            </div>
            

        </div>
    )
}

export default Content;