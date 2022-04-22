import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#109CF1",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
    letterSpacing: "0.01em",
    color: "#FFFFFF",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const rows = [
  {
    action: "edit",
    project: "1222 Biscayne Blvd",
    desc: "200,000 Sq. ft Building remodeling",
    projectStatus: "open",
    subcont: "Subcontractor, Inc",
    status: "in compliance",
    dateReceived: "04/17/2021",
  },
  {
    action: "edit",
    project: "1222 Biscayne Blvd",
    desc: "200,000 Sq. ft Building remodeling",
    projectStatus: "open",
    subcont: "Subcontractor, Inc",
    status: "in compliance",
    dateReceived: "04/17/2021",
  },
  {
    action: "edit",
    project: "1222 Biscayne Blvd",
    desc: "200,000 Sq. ft Building remodeling",
    projectStatus: "open",
    subcont: "Subcontractor, Inc",
    status: "in compliance",
    dateReceived: "04/17/2021",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ProjectTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Action</StyledTableCell>
            <StyledTableCell>Project</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Project status</StyledTableCell>
            <StyledTableCell>Subcontractor</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Date received</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <a style={{textDecoration: 'underline'}} href="/public">{row.action}</a>
              </StyledTableCell>
              <StyledTableCell><a style={{textDecoration: 'underline'}} href="/">{row.project}</a></StyledTableCell>
              <StyledTableCell>{row.desc}</StyledTableCell>
              <StyledTableCell>{row.projectStatus}</StyledTableCell>
              <StyledTableCell><a style={{textDecoration: 'underline'}} href="/">{row.subcont}</a></StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.dateReceived}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
