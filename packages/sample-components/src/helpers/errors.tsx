import React from "react";

export const parsingErrors = (response: any) => {
  const { errors, message } = response;

  let output = [message];

  if (errors) {
    Object.keys(errors).map((item: any) => {
      output.push(errors[item]);
    });
  }

  return output.map((msg: any) => <div>{msg}</div>);
};
