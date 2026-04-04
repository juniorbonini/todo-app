import { ReactNode } from "react";

export interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
  mode?: "fill" | "outline";
}
