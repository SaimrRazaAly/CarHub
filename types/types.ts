import { MouseEventHandler } from "react";

export interface customBtnProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufactureProps{
  manufacturer: string;
  setmanufacturer: (manufacturer: string) => void;
}