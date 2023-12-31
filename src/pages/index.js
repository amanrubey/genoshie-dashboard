import Image from 'next/image'
import React from "react";
import { Inter } from 'next/font/google'
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Price from './price/price';
import Dashboard from './dashboard/dashboard';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Dashboard/>
}
