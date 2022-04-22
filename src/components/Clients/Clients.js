import React from "react";
import ReUsedTable from "../../UI/ReUsedTable";
import { clientsTableData } from "../../dummyData/dummyData";

const Clients = ({handleTableRow}) => {
  return (
    <div>
      <ReUsedTable listName='Client list' type="clients" handleTableRow={handleTableRow} rowDatas={clientsTableData} />
    </div>
  );
};

export default Clients;
