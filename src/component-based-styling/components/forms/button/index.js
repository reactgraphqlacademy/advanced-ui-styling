import React from "react";

// .btn-primary {
//     color: #fff;
//     background-color: #337ab7;
//     border-color: #2e6da4;
// }

// .btn-lg {
//     padding: 10px 16px;
//     font-size: 18px;
//     line-height: 1.3333333;
//     border-radius: 6px;
// }

// .btn-block {
//     display: block;
//     width: 100%;
// }

// default style:
//  {
//     display: inline-block;
//     padding: 6px 12px;
//     margin-bottom: 0;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 1.42857143;
//     text-align: center;
//     white-space: nowrap;
//     vertical-align: middle;
//     -ms-touch-action: manipulation;
//     touch-action: manipulation;
//     cursor: pointer;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//     background-image: none;
//     border: 1px solid grey;
//     border-radius: 4px;
// }

const Button = ({ children = null, ...rest }) => (
  <button {...rest}>{children}</button>
);

export default Button;
