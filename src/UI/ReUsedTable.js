import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  TablePagination,
  Avatar,
} from "@material-ui/core";
import MainButton from "./MainButton";
import SearchBar from "material-ui-search-bar";
import ModalForm from "./ModalForm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "20px",
    /* identical to box height */

    letterSpacing: "0.01em",

    /* dark_blue */

    color: "#334D6E",

    opacity: "0.5",
  },
  names: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "0.01em",
    color: "#323C47",
  },
  texts: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "20px",
    letterSpacing: "0.01em",
    color: "#707683",
  },
  // searchbox: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // }
});

const tableHeaders = [
  "Name",
  "Email",
  "Company Name",
  "Role",
  "Owner",
  "Recently activity",
];

export default function ReUsedTable({ listName, rowDatas, type, handleTableRow }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const classes = useStyles();
  const [tableRows, setTableRows] = useState(rowDatas);
  const [searched, setSearched] = useState("");
  const [showModal, setShowModal] = useState(false);

  //   table pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // serach functions
  const requestSearch = (searchedVal) => {
    const filteredRows = tableRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTableRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  // checkbox functions

  // const onSelectAllClick = (e) => {
  //   setCheck(!check);
  // }
  // const singleCheck = (e) => {
  //   setCheck(!check);
  //   console.log(check, e);
  // }

  return (
    <div>
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
      <Grid container style={{ marginBottom: "40px" }}>
        <Grid item lg={6}>
          <MainButton text="Action" width={87} />
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: "flex", gap: "0 20px", alignItems: "center" }}>
            <SearchBar
              style={{ width: "100%" }}
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
              placeholder="Search for a task"
            />
            <MainButton text="Add new task" width={160} modalHandle={setShowModal} type="modal"/>
          </div>
        </Grid>
      </Grid>
      <div
        className={classes.texts}
        style={{ fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}
      >
        {listName}
      </div>
      <Paper>
        {tableRows.length > 0 && (
          <>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={check}
                      // onChange={onSelectAllClick}
                      // inputProps={{ "aria-label": "select all desserts" }}
                      />
                    </TableCell>
                    {tableHeaders.map((head) => (
                      <TableCell className={classes.tableHead} key={head}>
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        style={{ cursor: "pointer" }}
                        hover
                        key={index}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            // checked={check}
                            // onChange={singleCheck}
                          />
                        </TableCell>
                        <TableCell onClick={() => handleTableRow(row, type)} component="th" scope="row">
                          <Grid container style={{ alignItems: "center" }}>
                            <Grid item lg={4}>
                              <Avatar src={row.src} alt={row.name} />
                            </Grid>
                            <Grid item lg={8}>
                              <p className={classes.names}>{row.name}</p>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell onClick={() => handleTableRow(row, type)} className={classes.texts}>
                          {row.email}
                        </TableCell>
                        <TableCell onClick={() => handleTableRow(row, type)} className={classes.texts}>
                          {row.companyName}
                        </TableCell>
                        <TableCell onClick={() => handleTableRow(row, type)} className={classes.texts}>
                          {row.role}
                        </TableCell>
                        <TableCell onClick={() => handleTableRow(row, type)} className={classes.texts}>
                          {row.owner}
                        </TableCell>
                        <TableCell onClick={() => handleTableRow(row, type)} className={classes.texts}>
                          {row.recentActive}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={tableRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Paper>
    </div>
  );
}
