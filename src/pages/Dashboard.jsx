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
    <div>{userName}</div>
  )
}

export default Dashboard