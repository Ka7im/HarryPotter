import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import classes from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
};

export default Button;