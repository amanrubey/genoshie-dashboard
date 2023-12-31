import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function RecentActivity() {
    let url = "https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"
    const list = [
        {
            title: "Graph",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Graph",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Graph",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Graph",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Graph",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Graph",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Graph",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Graph",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];

    return (
        <>
            <div className="flex justify-center">


                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-36 p-4">

                    <div class="items-center justify-between hidden  gap-64 w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div class="relative mt-3 md:hidden">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />
                        </div>
                        <ul class="flex flex-col  p-4 md:p-0 mt-4 cursor-pointer gap-8 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li className="hover:cursor-pointer ">
                                <a href="#" class="hover:cursor-pointer block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">All</a>
                            </li>
                            <li className="hover:cursor-pointer">
                                <a href="#" class=" block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white ">Shared</a>
                            </li>
                            <li>
                                <a href="#" className="hover:cursor-pointer block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 ">Papers Collected</a>
                            </li>
                            <li>
                                <a href="hover:cursor-pointer block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 ">Favorites</a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="gap-2 -mt-16 p-24 grid grid-cols-2 sm:grid-cols-4">
                {list.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={url}
                            />
                        </CardBody>
                        <CardFooter className="text-small bg-gradient-to-r from-cyan-300 to-blue-200 justify-between">
                            <b>{item.title} {index + 1}</b>
                            <p className="text-default-500">29/12/2023</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </>
    );
}
