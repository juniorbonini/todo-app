import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  mode?: "fill" | "outline";
}
