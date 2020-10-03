// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";

// const columns = [
//   { id: "name", label: "Name", minWidth: 50 },
//   { id: "zipcode", label: "Zipcode", minWidth: 50 },
//   {
//     id: "distance",
//     label: "Distance (mile)",
//     minWidth: 50,
//     align: "left",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "rating",
//     label: "Rating",
//     minWidth: 50,
//     align: "left",
//     format: (value) => value.toLocaleString("en-US"),
//   },
// ];

// function createData(name, zipcode, distance, rating) {
//   return { name, zipcode, distance, rating };
// }

// const rows = [
//   createData("Thomas", "77083", 2, 5),
//   createData("Jeff", "14236", 123, 3),
//   createData("Bill", "78433", 134, 4),
//   createData("Donald", "16497", 555, 7),
//   createData("Kent", "97313", 11, 3),
//   createData("Julia", "78489", 1, 5),
//   createData("Emily", "12047", 34, 6),
//   createData("James", "31456", 22, 10),
//   createData("John", "12312", 34, 2),
//   createData("David", "33433", 2, 4),
//   createData("Joseph", "44444", 44, 5),
//   createData("Charles", "33341", 11, 6),
//   createData("Will", "33113", 88, 1),
//   createData("Robert", "44444", 34, 2),
//   createData("Michael", "22221", 1, 5),
// ];

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// export default function StickyHeadTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === "number"
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import EventIcon from "@material-ui/icons/Event";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function Doctor() {
  return (
    <MaterialTable
      icons={tableIcons}
      title="Available nearby doctor"
      columns={[
        { title: "Name", field: "name" },
        { title: "Zipcode", field: "zipcode" },
        { title: "Distance (mile)", field: "distance", type: "numeric" },
        {
          title: "Rating",
          field: "rating",
          type: "numeric",
        },
      ]}
      data={[
        { name: "Thomas", zipcode: "11111", distance: 2, rating: 7 },
        { name: "Bill", zipcode: "12345", distance: 1, rating: 5 },
        { name: "David", zipcode: "31445", distance: 10, rating: 10 },
        { name: "Jeff", zipcode: "11314", distance: 13, rating: 2 },
        { name: "Maria", zipcode: "23333", distance: 5, rating: 5 },
        { name: "Julia", zipcode: "55555", distance: 6, rating: 3 },
        { name: "Will", zipcode: "11313", distance: 3, rating: 6 },
      ]}
      actions={[
        {
          icon: EventIcon,
          tooltip: "Scheduling appointment",
          onClick: (event, rowData) =>
            alert("You scheduled an appointment with Doctor " + rowData.name),
        },
      ]}
      options={{
        sorting: true,
      }}
    />
  );
}
export default Doctor;
