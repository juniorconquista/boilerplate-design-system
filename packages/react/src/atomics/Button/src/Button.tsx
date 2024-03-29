import React, {
  ComponentPropsWithRef,
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "@bmg-ds/typings";
import { button } from "@bmg-ds/styles";

import { ButtonBaseProps, ButtonComponents } from "./button.types";
import { ButtonSkeleton } from "./components";

const Button = forwardRef(
  (
    {
      className: _className,
      style: _style,
      as: As = "button",
      children,
      ...props
    }: ButtonBaseProps & { as: any },
    ref,
  ) => {
    const { appearance = "neutral", ...rest } = props;
    const innerRef = useRef<HTMLButtonElement>(null);
    useRefObjectAsForwardedRef(ref, innerRef);

    useImperativeHandle<
      HTMLButtonElement | HTMLAnchorElement | null,
      HTMLButtonElement | null
    >(ref, () => innerRef?.current);

    useEffect(() => {
      if (
        innerRef.current &&
        !(innerRef.current instanceof HTMLAnchorElement) &&
        !(innerRef.current instanceof HTMLButtonElement)
      ) {
        console.error(
          "Error: Found `Button` component that renders an inaccessible element",
          innerRef.current,
          "Please ensure `Button` always renders as <a> or <button>",
        );
      }
    }, [innerRef]);

    return (
      <As
        {...(rest as any)}
        className={button.classnames.appearance[appearance]}
        ref={innerRef}
      >
        {children}
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", ButtonBaseProps> &
  ButtonComponents;

Button.Skeleton = ButtonSkeleton;
Button.displayName = "Button";
Button.Skeleton.displayName = "Button.Skeleton";

export type ButtonProps = ComponentPropsWithRef<typeof Button>;
export { Button };
