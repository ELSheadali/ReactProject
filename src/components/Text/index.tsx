import React from "react";

const sizeClasses = {
  txtRubikGlitchRegular56: "font-normal font-rubikglitch",
  txtBalooRegular24: "font-normal font-baloo ",
  txtBalooTammaRegular24: "font-normal font-balootamma",
  txtBalooRegular8: "font-normal font-baloo",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
