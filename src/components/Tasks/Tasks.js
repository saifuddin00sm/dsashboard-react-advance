import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { taskTableRows } from "../../dummyData/dummyData";
import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Priority from "../../UI/Priority";
import MainButton from "../../UI/MainButton";
import SearchBar from "material-ui-search-bar";
import ModalForm from "../../UI/ModalForm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    flex: "1 1 100%",
  },
  taskTitle: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    /* identical to box height, or 143% */

    letterSpacing: "0.2px",

    /* grayscale / black */

    color: "#252733",
  },
  status: {
    fontFamily: "Mulish",
    fontStyle: " normal",
    fontWeight: " 400",
    fontSize: " 12px",
    lineHeight: " 16px",
    /* identical to box height, or 133% */

    letterSpacing: "0.1px",

    /* grayscale / gray light */

    color: "#C5C7CD",
  },
  tableHeader: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "18px",
    /* identical to box height */

    letterSpacing: "0.2px",
    /* grayscale / gray */

    color: "#9FA2B4",
  },
  mainHeader: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "19px",
    lineHeight: "24px",
    /* identical to box height */

    letterSpacing: "0.4px",

    /* grayscale / black */

    color: "#252733",
  },
});

const options = ["high", "low", "normal"];

export default function BasicTable() {
  const classes = useStyles();
  const [rows, setRows] = useState(taskTableRows);
  const [searched, setSearched] = useState("");
  const [singleRow, setSingleRow] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleTableClick = (event, row) => {
    setSingleRow(row);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (opt) => {
    let newList = [];
    const newRows = rows;
    const updateItem = { ...singleRow, priority: opt };

    newRows.forEach(function (item) {
      if (item.id === updateItem.id) {
        newList.push(updateItem);
      } else {
        newList.push(item);
      }
    });

    if (newList.length > 0) {
      setRows(newList);
    }
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    console.log(event.target.value, 10);
    setPage(0);
  };

  // serach functions
  const requestSearch = (searchedVal) => {
    const filteredRows = taskTableRows.filter((row) => {
      return row.task.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <div>
    <ModalForm showModal={showModal} setShowModal={setShowModal} />
      <Grid container style={{ marginBottom: "20px" }}>
        <Grid item lg={6}></Grid>
        <Grid
          item
          lg={6}
          style={{ display: "flex", gap: "0 26px", alignItems: "center" }}
        >
          <SearchBar
            style={{ width: "100%" }}
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            placeholder="Search for a task"
          />
          <MainButton text="Add new task" width={160} modalHandle={setShowModal} type="modal"/>
        </Grid>
      </Grid>
      {rows.length > 0 && (
        <Paper>
          <Typography
            className={classes.mainHeader + " px-3 py-4"}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            All tasks
          </Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader}>
                    Ticket details
                  </TableCell>
                  <TableCell className={classes.tableHeader}>
                    Related to
                  </TableCell>
                  <TableCell className={classes.tableHeader}>Date</TableCell>
                  <TableCell className={classes.tableHeader}>
                    Priority
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Grid container>
                          <Grid item lg={2}>
                            <Avatar alt={row.task} src={row.src} />
                          </Grid>
                          <Grid item lg={10}>
                            <Typography className={classes.taskTitle}>
                              {row.task}
                            </Typography>
                            <Typography className={classes.status}>
                              {row.status}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.taskTitle}>
                          {row.related}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.taskTitle}>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid container style={{ alignItems: "center" }}>
                          <Grid item lg={6}>
                            <Priority priority={row?.priority} />
                          </Grid>
                          <Grid item lg={6}>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={(e) => handleTableClick(e, row)}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: 48 * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              {options.map((option) => (
                                <MenuItem
                                  key={option}
                                  selected={option === "Pyxis"}
                                  onClick={() => handleClose(option)}
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </Menu>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </div>
  );
}
