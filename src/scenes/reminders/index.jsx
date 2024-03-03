import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Moment  from 'moment';
import {Box,Table,TableBody,TableCell,TableRow,TableHead} from '@mui/material';


const Reminders =() =>{

  const baseURL = "https://server-u74y.vercel.app/";


    const [tabletData, setTabletData] = useState([]);

    const fetchTabletsList = async () => {
      try {
      // return axios.get('http://localhost:3000/findTabletsList').then((res) => setTabletData(JSON.parse(JSON.stringify(res.data))));
    
      const data = await fetch(baseURL+'findReminders');
      const items = await data.json();
      console.log('fetching'+JSON.stringify(items));
    
        setTabletData(items);
    
    }catch (error) {
      console.error(error);
    }
    };
    
    useEffect(() => {
      fetchTabletsList();
    }, []);
    
    


    return (
        
        <>
        <div>Reminders</div>
        <div>

        <Table  style={{width:'1000px'}} >
              <TableBody>
            {tabletData.map((row,i)=>(
                  <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 1} }}>
                                
                  <TableCell align="right" size='10px'>

                <p>{row.profileNo} </p>
                </TableCell>
                <TableCell>
               <p> {Moment(row.nextVisitDate).format('DD-MMM-YYYY')}</p>
                </TableCell>
                     <TabelCell>

                    <Button >Send Reminder</Button>
                </TabelCell>
                </TableRow>
                        ))}
    

              </TableBody>
             </Table> 

        </div>
        </>
    )
}

export default Reminders;
