import React, { useContext } from "react";
import { CompanyContext } from "./CompanyParent";

function CompanyChild2() {
    const { companyAddress, companyContact } = useContext(CompanyContext);

    return (
        <div>
            <p>Child 2 - Address: {companyAddress}</p>
            <p>Contact: {companyContact}</p>
        </div>
    );
}

export default CompanyChild2;