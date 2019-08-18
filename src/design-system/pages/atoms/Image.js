import React from "react";
import Image from "../../components/data-display/Image";

const Page = () => (
  <React.Fragment>
    <h1>Image</h1>
    <p>
      Create an Image component in{" "}
      <code>src/design-system/components/data-display/Image.js</code> composing
      it with the Box component and adding a margin bottom of 0.9rem using a
      prop. Hints, use:
    </p>
    <ul>
      <li>1) styled(Box) </li>
      <li>2) Image.defaltProps;</li>
    </ul>
    <Image
      maxWidth="100px"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    />
  </React.Fragment>
);

export default Page;
