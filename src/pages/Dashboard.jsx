import React from 'react'


import { useLoaderData } from 'react-router-dom';

//helper functions
import { fetchData } from '../helpers'


export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}


const Dashboard = () => {
    const {userName} = useLoaderData();
  return (
    <div>
      <p>Dashboard</p>
      <h1>{userName}</h1>
    </div>
  )
}

export default Dashboard