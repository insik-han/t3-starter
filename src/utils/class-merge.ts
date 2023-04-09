import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cm = (...classes: ClassValue[]) => twMerge(clsx(classes));
