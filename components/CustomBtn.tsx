"use client";

import { customBtnProps } from "@/types/types";
import Image from "next/image";


const CustomBtn = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: customBtnProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6 right-2">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default CustomBtn;