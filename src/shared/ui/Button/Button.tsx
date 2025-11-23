import React from "react";
import clx from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  className?: string;
}

export function Button(props: ButtonProps): React.ReactElement {
  const { children, className = "", type = "button", ...rest } = props;

  return (
    <button className={clx(className, "button")} type={type} {...rest}>
      {children}
    </button>
  );
}
