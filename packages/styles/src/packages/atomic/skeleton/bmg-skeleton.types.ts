import { Conditions } from "../../../index.d";
import { skeletonSprinkle } from "./bmg-skeleton.css";

const { properties: propertiesText } = skeletonSprinkle;

type SkeletonBorderRadiusProperties = keyof typeof propertiesText.borderRadius;

type SkeletonConditions<T> = Conditions<T>;

export interface SkeletonSprinkle {
  /**
   * Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.
   */
  width?: string | SkeletonConditions<string>;
  /**
   * Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height?: string | SkeletonConditions<string>;
  /**
   * The border radius of the skeleton.
   */
  borderRadius?:
    | SkeletonBorderRadiusProperties
    | SkeletonConditions<SkeletonBorderRadiusProperties>;
}
