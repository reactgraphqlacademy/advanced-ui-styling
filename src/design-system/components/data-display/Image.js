import react from "react";
import styled from "styled-components";
import Box from "../layout/Box";

/* 
EXERCISE
Create an Image component composing it with the Box component and adding a margin bottom of 0.9rem
Hints, use:
    1) styled(Box)  
    2) Image.defaltProps;
*/

const Image = styled("image")`
  margin-bottom: 0.9rem;
`;

// solution
// const Image = styled(Box)``;
// Image.defaultProps = {
//   mb: 2,
//   as: "img"
// };

export default Image;
