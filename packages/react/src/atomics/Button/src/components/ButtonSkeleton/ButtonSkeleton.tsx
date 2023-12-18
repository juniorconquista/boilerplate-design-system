import React from "react";

import { Skeleton } from "@bmg-ds/skeleton";
import { ButtonSkeletonProps } from "./buttonSkeleton.types";

const ButtonSkeleton: React.FC<ButtonSkeletonProps> = ({
  width,
  "data-testid": dataTestId,
}) => (
  <Skeleton
    width={width ?? "4.75rem"}
    height="2.125rem"
    borderRadius="2"
    data-testid={dataTestId}
  />
);

export { ButtonSkeleton };
