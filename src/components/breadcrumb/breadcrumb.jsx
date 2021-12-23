import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import "antd/dist/antd.min.css";

const Arrow = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const BreadcrumbItem = styled(Breadcrumb.Item)`
  &:hover {
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  }
`;

const Breadcrumbs = ({
  showArrow = false,
  breadCrumbs,
  onBack,
  simpleBreadcrumbs,
}) => {
  const arr = simpleBreadcrumbs || breadCrumbs;

  if (arr.length > 2) {
    showArrow = true;
  }

  return (
    <div className="App">
      <Breadcrumb>
        {arr.length > 1 &&
          arr.slice(0, arr.length - 1).map((item, idx) => (
            <BreadcrumbItem
              key={idx}
              style={!simpleBreadcrumbs ? item.styles : {}}
              onClick={!simpleBreadcrumbs ? item.onClick : null}
            >
              {simpleBreadcrumbs ? item : item.path}
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
      <h3>
        <Arrow onClick={onBack}>{showArrow ? "←\t " : ""}</Arrow>
        <span>
          {simpleBreadcrumbs ? arr[arr.length - 1] : arr[arr.length - 1].path}
        </span>
      </h3>
    </div>
  );
};

export default Breadcrumbs;
