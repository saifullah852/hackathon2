import React from "react"
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function shop (){
    return(

 <header className="text-gray-600 body-font">
      <p className="text-center justify-center text-white bg-black">sign up and get 50% off on your first order</p>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-5xl text-black font-bold">SHOP.CO</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a href="http://localhost:3000/shop" className="mr-5 hover:text-gray-900">Shop</a>
      <a className="mr-5 hover:text-gray-900">New Arrival</a>
      <a className="mr-5 hover:text-gray-900">On Sale</a>
      <a className="mr-5 hover:text-gray-900">Brands</a>
    </nav>
    <div  style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-50 outline-black-500 text-center justify-center text-xs w-[377px] pr-20  lg:block md:block h-[48] bg-gray-300 "
                    placeholder="Search for products."
                  />

                  <FaSearch className="w-5 h-5 text-gray-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                
                </div>
                <div className="w-[62px] h-[24px] text-xl gap-20">
                <IoCartOutline className="text-black left-3 w-5 h-5 left-5 top-1/2 transform -translate-y-1/2 hidden lg:block md:block"/>
                <CgProfile className="text-black left-3 w-5 h-5 left-5 top-1/2 transform -translate-y-1/2 hidden lg:block md:block "/>
                </div>
              </div>
              
<div className="w-[1240px] h-[180px] py-10 bg-black" > <p className="text-3xl text-white font-extrabold ">STAY UPTO DATE WITH OUR LATEST OFFERS</p>
        
        {/*search icon*/}
        <div   className="text-center justify-center">
                <input
                  className="rounded-3xl py-3 px-50 outline-black-500 text-center justify-center text-white text-xs w-[377px] pr-20  lg:block md:block h-[48] bg-gray-300 "
                  placeholder="Enter your email address."
                />

                <FaSearch className="w-5 h-5 text-gray-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
              <button className="rounded-lg bg-gray-700 text-white left-0">subscribe to newsletter</button>
              </div>
      
      </div>

      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <span className="ml-3 text-3xl font-extrabold">SHOP.CO</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">We have clothes that suits your style and which you are proud to wear from women to men.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About </a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Features</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Works</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Career</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Help</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Customer Support </a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Delivery Details </a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Terms and Condition</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FAQ</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Manage Deliveries </a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Orders</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Payments</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">RESOURCES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Free eBooks</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Development tutorial</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">How to -blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Youtube Playlist</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2024-2025 SHOP.CO
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"> All rights reserved</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</header>
    )
}