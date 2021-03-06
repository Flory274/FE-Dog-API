import React from "react";

export const getDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breed/akita/images");
  return response.json();
};
