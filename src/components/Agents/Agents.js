import React from 'react'
import ReUsedTable from '../../UI/ReUsedTable';
import {agentsTableData} from '../../dummyData/dummyData';

const Agents = ({handleTableRow}) => {
  return (
    <div>
      <ReUsedTable listName="" type="agents" handleTableRow={handleTableRow} rowDatas={agentsTableData}/>
    </div>
  )
}

export default Agents