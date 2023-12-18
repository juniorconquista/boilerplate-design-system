import { styles, skeletonSprinkle } from "./bmg-skeleton.css";

export const skeleton = {
  classnames: { ...styles },
  ...skeletonSprinkle,
};

export type { SkeletonSprinkle } from "./bmg-skeleton.types";
