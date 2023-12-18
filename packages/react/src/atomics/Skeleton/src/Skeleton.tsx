import React from "react";
import { skeleton } from "@bmg-ds/styles";

import { SkeletonProps } from "./skeleton.types";

const Skeleton: React.FC<SkeletonProps> = ({
  className: _className,
  style: _style,
  ...rest
}) => {
  const { className, style, otherProps } = skeleton.sprinkle(
    rest as Parameters<typeof skeleton.sprinkle>[0],
  );

  return (
    <div
      className={[skeleton.classnames.base, className].join(" ")}
      style={style}
      {...otherProps}
    />
  );
};

Skeleton.displayName = "Skeleton";
export { Skeleton };
