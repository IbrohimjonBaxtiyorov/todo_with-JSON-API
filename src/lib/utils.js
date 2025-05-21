import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function validation(obj) {
  if (obj.title.trim().length < 6) {
    return { target: "title", message: "Sarlavhani kiriting" };
  }

  return false;
}
