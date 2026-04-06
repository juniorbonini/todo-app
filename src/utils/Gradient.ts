import { Color } from "@/style/Color";

export const Gradients = {
  primary: {
    colors: [
      Color.blue["blue-gradient"],
      Color.purple["purple-gradient"],
      Color.purple["purple-gradient-dark"],
    ] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
};
