import React from "react";
import { Grafic } from "./grafic";
export default function Graficcard() {
  return (
    <div>
      <div className="grafiek">
        <Grafic/>
        
        <div className="grafisch p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"></div>
      </div>
    </div>
  );
}
