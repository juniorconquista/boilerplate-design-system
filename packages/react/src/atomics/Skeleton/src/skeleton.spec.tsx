import React from "react";
import { render, screen } from "@testing-library/react";

import { Skeleton } from "./Skeleton";
import { SkeletonProps } from "./skeleton.types";

const makeSut = (props: {
  height?: string;
  width?: string;
  borderRadius?: string;
}) => {
  render(
    <Skeleton {...(props as SkeletonProps)} data-testid="skeleton-element" />,
  );
};

describe("GIVEN <Skeleton />", () => {
  describe("WHEN rendered", () => {
    it("THEN should ensure dynamic height and width properties are applied", () => {
      makeSut({
        height: "10rem",
        width: "50rem",
      });
      const skeleton = screen.getByTestId("skeleton-element");
      expect(skeleton.getAttribute("style")).toMatch(
        /--width-xs__\w{0,9}: 50rem;/,
      );
      expect(skeleton.getAttribute("style")).toMatch(
        /--height-xs__\w{0,9}: 10rem;/,
      );
    });

    it("THEN should ensure dynamic border radius properties are applied", () => {
      makeSut({
        height: "10rem",
        width: "50rem",
        borderRadius: "2",
      });
      const skeleton = screen.getByTestId("skeleton-element");
      expect(skeleton.getAttribute("style")).toMatch(
        /--borderRadius-xs__\w{0,9}: 2;/,
      );
    });
  });
});
