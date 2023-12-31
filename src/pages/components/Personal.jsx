import React, { useState } from 'react'

import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Settings from './Settings';
export default function Personal() {

    let [flag,setFlag] = useState(false);

    return (
        <>
            <div className='flex flex-row mt-[88px]'>
                <div>
                    <h1 className='text-white text-6xl  font-bold '>
                        Aman Rubey
                    </h1>
                    <h2 className='p-2 text-white'>
                        aman.rubey@gmail.com
                    </h2>
                </div>
                <div className='flex-grow flex justify-end items-center mr-24'>
                    <Button onPress={()=>setFlag(!flag)} className='h-16 w-16 bg-white'>Settings</Button>
                </div>
            </div>
            <div className='p-24 mx-auto'>
                {flag && <Settings/>}
            </div>
            
        </>
    )
}
