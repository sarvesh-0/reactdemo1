import React, { useContext } from "react";
import { CompanyContext } from "./CompanyParent";

function CompanyChild1() {
  const { companyName } = useContext(CompanyContext);

  return <p>Child 1 - Company Name: {companyName}</p>;
}

export default CompanyChild1;