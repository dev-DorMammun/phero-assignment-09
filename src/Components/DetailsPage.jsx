import React from "react";
import { useParams } from "react-router";

const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
};

export default DetailsPage;
