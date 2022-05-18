import React from "react";
import { useState } from "react";
import style from "./Tablehome.module.css";

export default function Kas() {
  return (
    <div className="home">
      <div className="max-w-20">
        <div className="box-content h-52 w-80  p-4 border-1 border-white rounded-lg mt-20 ml-10 bg-red-400">
          <h1 className="text-3xl text-white">Kas:</h1>
          <h2 className="text-3xl text-white">50€</h2>
        </div>
      </div>
    </div>
  );
}
