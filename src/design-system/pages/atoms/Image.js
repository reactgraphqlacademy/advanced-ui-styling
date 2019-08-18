import React from "react";
import Image from "../../components/data-display/Image";

const Page = () => (
  <React.Fragment>
    <h1>Image</h1>
    <Image
      maxWidth="100px"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    />
  </React.Fragment>
);

export default Page;
