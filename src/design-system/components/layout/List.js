import styled from "styled-components";
import Box from "./Box";

export const Item = styled(Box)``;
Item.defaultProps = {
  as: "li",
  py: 1,
  pl: 3,
  pr: 1,
  m: 0
};

const List = styled(Box)`
  list-style: none;
`;
List.defaultProps = {
  as: "ul",
  m: 0,
  p: 0
};
// export const Item = styled.li``;

// const List = styled.ul``;

List.Item = Item;

export default List;
