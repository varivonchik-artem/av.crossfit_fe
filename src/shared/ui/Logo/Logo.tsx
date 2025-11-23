import React from "react";
import clx from "classnames";

export interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;

  className?: string;

  href: string;
}

export function Logo(props: LogoProps) {
  const { children, className, ...rest } = props;

  const classes = clx(className, "logo");

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
