import { Form } from "antd";
import React from "react";

interface IProps {
  children?: any;
  style?: any;
}

export const FilterBarComponent = (props: IProps) => {
  return (
    <div className="sample-filter-bar">
      <Form style={{ justifyContent: `${props.style}` }}>{props.children}</Form>
    </div>
  );
};

export default FilterBarComponent;
