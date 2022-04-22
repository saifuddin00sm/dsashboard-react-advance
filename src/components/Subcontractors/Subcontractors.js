import React from 'react'
import ReUsedTable from '../../UI/ReUsedTable';
import {subTableData} from '../../dummyData/dummyData';

const Subcontractors = ({handleTableRow}) => {
  return (
    <div>
      <ReUsedTable listName='' type="subs" handleTableRow={handleTableRow} rowDatas={subTableData}/>
    </div>
  )
}

export default Subcontractors