import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "components/CustomButtons/Button.js";

const columns = [
  { id: "id", label: "ID", minWidth: 120 },
  { id: "buyer", label: "Buyer", minWidth: 120 },
  { id: "seller", label: "Seller", minWidth: 120 },
  { id: "category", label: "Category", minWidth: 120 },
  { id: "amount", label: "Amount", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 120 },
];

function createData(id, buyer, seller, category, amount, status) {
  //const density = population / size;
  return { id, buyer, seller, category, amount, status };
}

const rows = [
  createData(
    "01",
    "Huzaifa",
    "Arooj",
    "Plumber",
    "245656",
    <Button size="sm" color="black" href="/payment-page">
      Finish Job
    </Button>
  ),
  createData(
    "02",
    "Huzaifa",
    "Musa",
    "Electrician",
    "245656",
    <Button size="sm" color="black" href="/payment-page">
      Finish Job
    </Button>
  ),
  createData(
    "03",
    "Huzaifa",
    "Wadood",
    "Chef",
    "245656",
    <Button size="sm" color="black" href="/payment-page">
      Finish Job
    </Button>
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "80%",
        overflow: "hidden",
        margin: "auto",
        marginBottom: 10,
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead
          // style={{
          //   background: "linear-gradient(60deg, #29524a, #e9bcb7)",
          // }}
          >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
