import React from "react";
import clx from "classnames";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const { className, ...rest } = props;

  const classes = clx(className, "image");

  return <img className={classes} {...rest} />;
};
