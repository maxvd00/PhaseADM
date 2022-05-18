// import React from 'react'
import style from "./Tablehome.module.css";

export default function Tablehome() {
  return (
    <div className="tablecard  bg-blue-400 box-content h-2/5 w-2/5 mr-8 absolute inset-x-0 top-44 ml-auto shadow-2xl rounded-lg">
      <h1 className="text-center color-white">laatste inkomsten en uitgaven</h1>
       <table className="table p-20 text-center grid place-items-center h-0 block ">
          <tbody>
            <tr className=" border-black">
              <th>Inkomsten/Uitgave</th>
              <th>Wat</th>
              <th>Bedrag</th>
            </tr>
            <tr className="bg-green-400">
              <td>Inkomsten</td>
              <td>Krantenknipsel</td>
              <td>+50,00</td>
            </tr>
            <tr className="bg-red-400">
              <td>Uitgave</td>
              <td>College sweater</td>
              <td>-30,00</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
  
    </div>
     
        
     
  );
}
