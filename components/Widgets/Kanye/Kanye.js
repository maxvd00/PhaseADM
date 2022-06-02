

import Image from "next/image";
import Axios from "axios";
import { useState } from "react";

export default function Kanye() {
  const [quote, setQuote] = useState();

  const Getquote = () => {
    Axios.get("https://api.kanye.rest").then((response) => {
      console.log(response);
      setQuote(response.data.quote);
    });
  };

  return (
    <div>
      <div>
        <div className="p-4 max-w-sm h-112 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 float-left top-0 right-0">
          <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white text-center">
            Socials
          </h5>
        <h1 className="font-100">{quote}</h1>
        <button onClick={Getquote} className="mt-80  m-auto">
        <Image
          src={"/kanyee.jpg"}
          alt="kanyee je weet zelf"
          width="70px"
          height="70px"
          className="rounded-sm"
        />
      </button>
      </div>

      
    </div>
        </div>
     
     
      
  );
}
