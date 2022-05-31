import React from "react";
import Image from 'next/image'

export default function Social() {
  return (
    <div>
      <div className="p-4 max-w-sm h-112 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 float-left top-0 right-0">
        <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white text-center">
          Socials
        </h5>
        <ul className="my-4 space-y-3">
          <li>
            <a
              href="https://www.tiktok.com/@phasebranding" target="_blank"
              className="flex items-center p-3 text-base font-bold text-white bg-gray-900 hover:bg-black rounded-lg  group hover:shadow dark:bg-gray-600 dark:text-white"
            >
                 <Image
      src={"/tiktoklogo.png"}
      alt="Picture of the author"
      width="50px"
      height="50px"
    />
  
              <span className="flex-1 ml-3 whitespace-nowrap">Tiktok:</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-s font-medium text-white shadow-2xl rounded dark:bg-gray-700 dark:text-gray-400">
               56
              </span>
              <span className="font-thin">Followers</span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/phasebranding" target="_blank"
              className="flex items-center p-3 text-base font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600  hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
                 <Image
      src={"/instalogo.png"}
      alt="Picture of the author"
      width="50px"
      height="50px"
    />
              <span className="flex-1 ml-3 whitespace-nowrap">Instagram:</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-s font-medium text-white rounded dark:bg-gray-700 dark:text-gray-400">
               503
              </span>
              <span className="font-thin">Followers</span>
            </a>
          </li>
          
          <li>
            <a
              href="https://instagram.com/phasebranding" target="_blank"
              className="flex items-center p-3 text-base font-bold bg-blue-600 text-white  rounded-lg hover: hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
                 <Image
      src={"/facebooklogo.png"}
      alt="Picture of the author"
      width="50px"
      height="50px"
    />
              <span className="flex-1 ml-3 whitespace-nowrap">Facebook:</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-s font-medium text-white rounded dark:bg-gray-700 dark:text-gray-400">
               3
              </span>
              <span className="font-thin">Followers</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-white bg-red-400 rounded-lg hover:bg-red-500 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
                          <Image
      src={"/PhaseLogo.png"}
      alt="Picture of the author"
      width="50px"
      height="40px"
    />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Website:
              </span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-s font-medium text-white rounded dark:bg-gray-700 dark:text-gray-400">
               30
              </span>
              <span className="font-thin">Visitors/pm</span>
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
              
           
          </a>
          
        </div>
      </div>
    </div>
  );
}
