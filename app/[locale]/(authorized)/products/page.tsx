import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Products() {
  return <div>products</div>;
}

export default withPageAuthRequired(Products);
