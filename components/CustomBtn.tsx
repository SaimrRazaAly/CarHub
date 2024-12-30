"use client";
import { customBtnProps } from "@/types/types";
import React from "react";

const CustomBtn = ({handleClick,title,containerStyles}:customBtnProps) => {
  return (
    <button
    disabled={false}
    type={`button`}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomBtn;
