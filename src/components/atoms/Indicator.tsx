import * as React from "react";
import {useMemo} from "react";
const style = require('../../styles/components/atoms/Indicator.sass');

type OuterProps = {
  size?: number;
  isLoading?: boolean;
  theme?: 'primary' | 'white';
};

type LoaderSizeType = {
  height: string
  width: string
};

export const Indicator: React.FC<OuterProps> = (
    {
      isLoading,
      theme,
      size
    }
) => {
  const loader = `loader--${theme || 'white'}`;
  const loaderSize = useMemo((): LoaderSizeType => {
    const _size: string = `${size || 100}px`;
    return {height: _size, width: _size}
  }, [size]);

  if (isLoading) {
    return (
        <div className={"load-container"} style={loaderSize}>
          <div className={style[loader]}/>
        </div>
    );
  } else {
    return null;
  }
};
