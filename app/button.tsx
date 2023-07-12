"use client";
import { getProjects } from "@/sanity/sanity-utils";
import React, { useState } from "react";
const Button = () => {
  const projects = getProjects();
  
  return (
    <nav className="flex justify-center items-center  ">
      <button className="mx-6 lg:mx-10 uppercase tracking-widest text-sm lg:text-base">
        <a href="">beauty</a>
      </button>
      <button className="mx-6 lg:mx-10 uppercase tracking-widest text-sm lg:text-base">
        <a href="">blog</a>
      </button>
      <button className="mx-6 lg:mx-10 uppercase tracking-widest text-sm lg:text-base">
        <a href="">health</a>
      </button>
      <button className="mx-6 lg:mx-10 uppercase tracking-widest text-sm lg:text-base">
        <a href="">travel</a>
      </button>
    </nav>
  );
};

export default Button;
