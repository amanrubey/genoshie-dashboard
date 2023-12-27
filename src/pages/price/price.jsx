import React from 'react'
import { Inter } from 'next/font/google'
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Price() {
    const basicLi = ["$4 per month per user",
    "Up to 10 graphs",
    "Up to 500 chatbot queries"
  ]
  const proLi = ["$8 per month per user",
    "Up to 50 graphs",
    "Up to 1000 chatbot queries",
    "Email + live chat support",
  ]
  const enterpriceLi = ["Contact for price",
    "Unlimited graphs",
    "Ability to upload custom PDFs",
    "24/7 phone + email support"
  ]
  const items = [basicLi, proLi, enterpriceLi]
  const item2 = [{ name: "Basic", description: "Best option for personal use & for your next project", price: "$4" },
  { name: "Company", description: "Relevant for extended & premium support.", price: "$8" },
  { name: "Enterprise", description: "Best for large scale uses and extended redistribution rights.", price: "Contact Us" }]
  return (
    <>
      <section className="bg-black min-h-screen ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300  via-teal-400 to-slate-100 md:hover:scale-125 transition-transform duration-300 ease-in-out" >Designed for business teams like yours.</h2>
            {/* <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {items.map((arr, ind) => {
              return (
                /*Price Card */
                <div key={ind} className="flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out p-6 mx-auto max-w-lg bg-black text-center border hover:shadow-teal-400 border-gray-600 text-white rounded-lg shadow  xl:p-8 dark:text-white">

                  {ind != 2 && <h3 className="mb-4 text-2xl md:p-2  font-semibold text-white">{item2[ind].name}</h3>}
                  {ind == 2 && <h3 className="mb-4 text-2xl  md:p-2 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-500  via-teal-400 to-white">{item2[ind].name}</h3>}

                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{item2[ind].description}</p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">{ind == 2 ? "$X" : item2[ind].price}</span>
                    {<span className="text-gray-500 dark:text-gray-400">/month</span>}

                  </div>

                  {/* <!-- List --> */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {arr.map((text, index) => {
                      return (
                        <li key={index} className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>{text}</span>
                        </li>
                      )
                    })}
                  </ul>
                  <Button className="text-white mt-auto bg-gradient-to-r from-blue-500 to-teal-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Get started →</Button>
                </div>

              )
            })}

          </div>
        </div>

      </section>
    </>
  )
}
