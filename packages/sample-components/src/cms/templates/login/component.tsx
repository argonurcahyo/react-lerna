import { Card } from "antd";
import React, { Component } from "react";

interface IProps {
  children?: React.ReactNode;
  title?: any;
}

export class LoginComponent extends Component<IProps, any> {
  public render() {
    const { children, title } = this.props;
    return (
      <div className="sample-membership">
        <div className="sample-membership__logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg/1280px-Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg.png" />
        </div>
        <div className="sample-membership__form">
          <Card>
            <div className="sample-membership__header">
              <h3>{title}</h3>
            </div>
            {children}
            <small>Hak Cipta &copy; 2019 Badan Pusat Statistik Semua Hak Dilindungi</small>
          </Card>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
