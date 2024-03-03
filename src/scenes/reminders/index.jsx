import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Moment  from 'moment';
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
            {tabletData.map((row,i)=>(

                <p>{row.profileNo} {Moment(row.nextVisitDate).format('DD-MMM-YYYY')}</p>
            ))
            }

        </div>
        </>
    )
}

export default Reminders;
