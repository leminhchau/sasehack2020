import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import classes from "./MaterialTable.module.css";
import MaterialTable from "material-table";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DeleteIcon from "@material-ui/icons/Delete";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//     // maxWidth: 650,
//   }
// });

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     fontSize: 16,
//     fontWeight: "bolder"
//     // backgroundColor: theme.palette.common.black,
//     // color: theme.palette.common.white,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

/**
 * Recognizes what the data is for (goals, profiles, feedback)
 * and gets the correct properties to be displayed
 */
const getTableData = (title, data) => {
  const dataToDisplay = [];
  let tooltip = "";

  title = String(title).toLowerCase();
  if (title.includes("goals")) {
    tooltip = "View Goals";
    data.map((el) => {
      dataToDisplay.push({
        name: el.name,
        completed: el.completed.length,
        inProgress: el.inProgress.length,
        toComplete: el.toComplete.length,
      });
    });
  } else if (title.includes("profiles")) {
    tooltip = "View Profiles";
    data.map((el) => {
      dataToDisplay.push({
        type: el.type,
        fullname: el.fullname,
        gender: el.gender,
        nationality: el.nationality,
      });
    });
  } else if (title.includes("feedback")) {
    tooltip = "View Feedback";
    data.map((el) => {
      dataToDisplay.push({
        name: el.name,
        session: el.session,
        rate: el.rate,
        comment: el.comment,
      });
    });
    // onRowUpdate: (newData, oldData) =>
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       const dataUpdate = [...currentData];
    //       const index = oldData.tableData.id;
    //       dataUpdate[index] = newData;
    //       setData([...dataUpdate]);
    //       console.log("on Update" + data)

    //       resolve();
    //     }, 1000)
    //   }),
  } else if (title.includes("schedule")) {
    tooltip = "View Schedule";
    data.map((el) => {
      dataToDisplay.push({
        name: el.name,
        date: el.date,
        timeStart: el.timeStart,
        timeEnd: el.timeEnd,
        details: el.details,
      });
    });
  }

  return { tooltip, dataToDisplay };
};

// https://material-table.com/#/docs/install
const View = ({ title, columns, data, handleViewAction }) => {
  // gets the data of either goals, profiles, or feedback component
  const { tooltip, dataToDisplay } = getTableData(title, data);

  // state of the current data json
  const [currentData, setData] = useState(dataToDisplay);

  return (
    <div className={classes.MaterialTable}>
      <MaterialTable
        icons={{ Delete: () => <DeleteOutlineIcon color="error" /> }}
        title={title}
        columns={columns}
        data={currentData}
        options={{
          filtering: true,
          exportButton: true,
          // exportCsv: (columns, data) => {
          //   alert('We can develop some code here before exporting');
          // },
          actionsColumnIndex: -1,
          // rowStyle: {
          //   backgroundColor: '#EEE',
          // }
        }}
        // .TFtable tr:nth-child(odd){  background: #b8d1f3; }
        // .TFtable tr:nth-child(even){ background: #dae5f4; }
        actions={[
          {
            icon: () => <Button color="secondary">View</Button>,
            tooltip: tooltip,
            // hidden: title === 'Mentee Goals' ? false : true,
            onClick: (event, rowData) => handleViewAction(rowData),
          },
        ]}
        editable={{
          // onRowAdd: newData =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       setData([...currentData, newData]);

          //       console.log("on Add" + data)

          //       resolve();
          //     }, 1000)
          //   }),

          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...currentData];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                console.log("on Update" + data);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...currentData];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                console.log("on delete" + data);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
};

export default View;
