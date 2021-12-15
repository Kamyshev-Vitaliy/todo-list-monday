// @flow
import * as React from 'react';
import {FC} from "react";

type ButtonPropsType = {
  children: React.ReactNode,
};

export const Button: FC<ButtonPropsType> = ({children}) => {
  return (
    <button>
      {children}
    </button>
  );
};