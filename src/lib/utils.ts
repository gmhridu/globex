import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const F = ({
  family = "Barlow Condensed",
  weight = 800,
}: {
  family?: string;
  weight?: number;
}) => ({
  fontFamily: `${family}, sans-serif`,
  fontWeight: weight,
});

export const serif = (w = 800) => F({ family: "Barlow Condensed", weight: w });
export const sans = (w = 400) => F({ family: "Inter", weight: w });
