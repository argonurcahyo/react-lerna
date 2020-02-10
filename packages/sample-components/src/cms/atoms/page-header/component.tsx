import React from "react";

interface IProps {
  title?: string;
}

export const PageHeaderComponent = (props: IProps) => {
  return (
    <div className="sample-page-header">
      <h1 className="sample-page-header__title">{props.title}</h1>
    </div>
  );
};
export default PageHeaderComponent;
