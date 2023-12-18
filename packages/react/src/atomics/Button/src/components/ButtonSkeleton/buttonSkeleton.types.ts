import { SkeletonProps } from "@bmg-ds/skeleton";

export type ButtonSkeletonProperties = Partial<
  Pick<SkeletonProps, "width" | "data-testid">
>;

export type ButtonSkeletonProps = ButtonSkeletonProperties;
