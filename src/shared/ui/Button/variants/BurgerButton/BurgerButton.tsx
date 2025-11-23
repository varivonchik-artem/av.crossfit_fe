import React from "react";
import clx from "classnames";

interface BurgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function BurgerButton(props: BurgerButtonProps): React.ReactElement {
  const { className = "", type = "button", ...rest } = props;

  const classes = clx(className, "burger-button");

  return (
    <button className={classes} type={type} {...rest} title="Open menu">
      <span className="visually-hidden">Open menu</span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  );
}
