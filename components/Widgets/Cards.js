import React from 'react'

export default function Cards() {
  return (
    <div>
      <div className="lg:flex mb-4 m-10 rounded mx-auto">

<div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
  
    <div className="px-6 py-4 h-full">
      <div className="font-bold text-xl text-center mb-2">kanye quote</div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <div className="w-10"></div>
      <p className="text-grey-700 text-base text-center text-3xl">
        "bla bla bla bla bla bla bla bla bla bla"
      </p>
    </div>
    <button          
    aria-hidden="true" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">         
    Click me for Kanye quote
    </button>
  
</div>

<div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
  <img className="w-full h-96 " src="/tiktoklogo.png" alt="tiktok" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 ">Tiktok:</div>
      <p className="text-green-500 text-base text-center text-5xl">
    
        70
      </p>
    </div>
 
</div>


</div>
    </div>
  )
}
