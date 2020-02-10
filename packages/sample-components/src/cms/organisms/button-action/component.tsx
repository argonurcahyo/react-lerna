import React from "react";

interface IProps {
  left?: any;
  right?: any;
}

export const ButtonActionComponent = (props: IProps) => {
  return (
    <div className="sample-button-action">
      <div className="sample-button-action__left">{props.left}</div>
      <div className="sample-button-action__right">{props.right}</div>
    </div>
  );
};

export default ButtonActionComponent;
