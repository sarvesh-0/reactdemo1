import React, { createContext } from "react";
import CompanyChild1 from "./CompanyChild1";
import CompanyChild2 from "./CompanyChild2";

export const CompanyContext = createContext();

function CompanyParent() {
  const companyInfo = {
    companyName: "Seed InfoTech",
    companyAddress: "Karve Road, Pune",
    companyContact: "9632587410"
  };

  return (
    <CompanyContext.Provider value={companyInfo}>
      <h2>Company Details</h2>
      <CompanyChild1 />
      <CompanyChild2 />
    </CompanyContext.Provider>
  );
}

export default CompanyParent;