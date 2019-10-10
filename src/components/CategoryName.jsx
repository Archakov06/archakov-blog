import styled from "styled-components";

const CategoryName = styled.div`
  display: inline-block;
  padding: 8px 20px;
  font-size: 12px;
  text-transform: uppercase;
  background: #000000;
  border-radius: 40px;
  margin-right: 15px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: white;
  ${props => (props.absolute ? `position: absolute;` : "")}
  z-index: 1;
  left: 25px;
  top: 25px;
`;

export default CategoryName;
