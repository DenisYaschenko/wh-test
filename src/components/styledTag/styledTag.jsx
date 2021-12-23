import React from "react";
import styled from "styled-components";
import { Tag } from "antd";
import "antd/dist/antd.min.css";

const CustomTag = styled(Tag)`
  border-width: ${(props) => (props.bold ? "2px" : "1px")};
  background: ${(props) => props.bordered && "none"};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

const StyledTag = ({
  bold = false,
  bordered = false,
  text = "Styled Tag",
  style,
}) => {
  return (
    <CustomTag color="blue" bold={bold} bordered={bordered} style={style}>
      {text}
    </CustomTag>
  );
};

export default StyledTag;
