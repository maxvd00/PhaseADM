import React, { useState } from 'react'

import Image from 'next/image';
import Axios from 'axios';

export default function Kanye() {

const [quote, setQuote] = useState("");

  const Getquote = () => {
    Axios.get("https://api.kanye.rest").then((response) => {
      console.log(response);
      setQuote(response.data.quote)
    });
  };

  return (
    <div>
      <div className='Apitext border-2 h-52 w-36 absolute ml-36 mt-16 text-center font-100'>
          <h1 className='font-100'>{quote}</h1>
      </div>
     
     <button onClick={Getquote} className='mt-80  m-auto'>
      <Image
      src={"/kanyee.jpg"}
      alt="kanyee je weet zelf"
      width= "70px"
      height= "70px"
      className="rounded-sm"


      />
       </button>
    </div>
  )
}
