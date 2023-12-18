import { HTMLAttributes } from "react";
import { SkeletonSprinkle } from "@bmg-ds/styles";

export interface SkeletonProperties extends SkeletonSprinkle {
  /**
   * This is an attribute used to identify a DOM node for testing purposes.
   */
  "data-testid"?: string;
}

export type SkeletonProps = SkeletonProperties & HTMLAttributes<HTMLDivElement>;
