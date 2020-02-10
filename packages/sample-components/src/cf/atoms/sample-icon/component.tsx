import React, { Component } from "react";

interface IProps {
  icon?: any;
  size?: any;
  className?: any;
}

export class SampleIconComponent extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }
  public render() {
    const { icon, size, className } = this.props;
    return (
      <span
        className={`sample-icon-${size ? size : "standard"} sample-icon-${icon} ${
          className ? className : ""
          }`}
      />
    );
  }
}
export default SampleIconComponent;
