import React from "react";

interface IProps {
  title: React.ReactNode;
}

export const TitleSidebarComponent = (props: IProps) => {
  return (
    <div className="sample-sidebar-title">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg/1280px-Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg.png" />
      <h3>{props.title}</h3>
    </div>
  );
};
export default TitleSidebarComponent;
