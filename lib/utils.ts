import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge classnames
 * @param args classnames to merge
 * @returns merged classnames
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
