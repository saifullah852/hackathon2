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

                      <h1 className="text-3xl font-extrabold text-black">casual</h1>
                     

                      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The t-shirt</h1>
           
            <div className="flex items-center flex-wrap ">
             
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The t-shirt</h1>
           
            <div className="flex items-center flex-wrap">
             
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">T-shirt</h1>

            <div className="flex items-center flex-wrap ">
             
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">jeans pants</h1>
         
            <div className="flex items-center flex-wrap ">
             
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHbpkP0aKG7PSELBsjLH9ZpMhbIcNVcpmIw&s" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">pants</h1>
          
            <div className="flex items-center flex-wrap">
             
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdF5-apYI-j4pvxkV4ruShs4qGdBHut5y5mA&s" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">pants</h1>
           
            <div className="flex items-center flex-wrap ">
              
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shirt</h1>
         
            <div className="flex items-center flex-wrap ">
             
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shirt</h1>
          
            <div className="flex items-center flex-wrap">
             
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shirt</h1>
           
            <div className="flex items-center flex-wrap ">
              
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


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