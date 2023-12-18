import React from "react";

import { Skeleton } from "@bmg-ds/skeleton";
import { IconSkeletonProps } from "./iconSkeleton.types";

const IconSkeleton: React.FC<IconSkeletonProps> = ({
  width,
  height,
  "data-testid": dataTestId,
}) => (
  <Skeleton
    width={width ?? "1rem"}
    height={height ?? "1rem"}
    borderRadius="2"
    data-testid={dataTestId}
  />
);

export { IconSkeleton };
