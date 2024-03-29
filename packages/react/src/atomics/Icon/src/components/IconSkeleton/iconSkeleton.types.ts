import { SkeletonProps } from "@bmg-ds/skeleton";

export type IconSkeletonProperties = Partial<Pick<SkeletonProps, "width">> &
  Partial<Pick<SkeletonProps, "height">> & {
    /**
     * This is an attribute used to identify a DOM node for testing purposes.
     */
    "data-testid"?: string;
  };

export type IconSkeletonProps = IconSkeletonProperties;
