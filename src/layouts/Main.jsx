import React from 'react'


import { Outlet, useLoaderData } from 'react-router-dom';

//helper functions
import { fetchData } from '../helpers'


export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}


const Main = () => {
    const {userName} = useLoaderData();
  return (
    <div>
        <p>Main</p>
        <main>
            <Outlet/>    
        </main>
    </div>
  )
}

export default Main