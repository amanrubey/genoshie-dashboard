import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, Image, Button, Slider } from "@nextui-org/react";
import CardApp from '../components/CardApp'
import Personal from '../components/Personal';
import Subscription from '../components/Subscription';
import UsageMetrics from '../components/RecentActivity';
export default function Dashboard() {

    const [pd, setPD] = useState(true);
    const [ad, setAD] = useState(false);
    const [um, setUM] = useState(false);
    const [ra, setRA] = useState(false);
    const lis = [pd, ad, um, ra];
    function handle( ind) {

        if (ind == 0) {
            setPD(true);
            setAD(false);
            setUM(false);
            setRA(false);
        }
        else if (ind == 1) {
            setPD(false);
            setAD(true);
            setUM(false);
            setRA(false);
        }
        else if (ind == 2) {
            setPD(false);
            setAD(false);
            setUM(true);
            setRA(false);
        }
        else {
            setPD(false);
            setAD(false);
            setUM(false);
            setRA(true);
        }
        
    }
    return (
        <div className=" h-screen flex flex-row bg-gradient-to-br from-black to-slate-800">
            <div className='h-full w-64  flex flex-col justify-top items-center sticky bg-black '>
                <img className='h-36 w-36 mt-16 rounded-full  bg-white object-fill' src='https://avatars.githubusercontent.com/u/58990863?v=4'>

                </img>
                <div className="mt-16 flex flex-col justify-center gap-8 ">
                    {['Personal Details', 'Account Details',  'Recent Activity','Usage Metrics'].map((x, ind) => {
                        return (
                            <Button disableRipple key={ind} onPress={() => handle(ind)} className={`w-48 focus:bg-purple-300  bg-white ml-auto mr-auto`}>
                                {x}
                            </Button>
                        )
                    })}
                    <Button className='bg-gradient-to-r from-cyan-200 to-blue-600 text-white'> Create New Graph! </Button>
                </div>
                
            </div>
            <div className=' rounded-xl flex flex-col   h-full flex-grow p-2 shadow-lg '>
                {pd &&  <Personal/>}
                {ad && <Subscription/>}
                {um && <UsageMetrics />}
            </div>

            
        </div>
    )
}
