// the product specs
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ProductPropertiesTable = ({ properties }) => {
  const propertyNames = Object.keys(properties);

  return (
    <>
      <hr />
      <TableContainer
        component={Paper}
        style={{
          maxWidth: "400px",
          margin: "20px 0",
        }}
      >
        <Table
          style={{
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <TableHead style={{ boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)" }}>
            <TableRow
              style={{
                background: "linear-gradient(to bottom, #999, #ccc)",
                color: "white",
              }}
            >
              <TableCell
                style={{
                  borderBottom: "none",
                }}
              >
                Properties
              </TableCell>
              <TableCell
                style={{
                  borderBottom: "none",
                }}
              >
                Values
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {propertyNames.map((propertyName, index) => (
              <TableRow
                key={propertyName}
                style={{
                  borderBottom: "none",
                  background: index % 2 === 0 ? "white" : "#fff", // Alternating row colors
                  color: index % 2 === 0 ? "grey" : "white", // Text color
                }}
              >
                <TableCell style={{ borderBottom: "none" }}>
                  {propertyName}
                </TableCell>
                <TableCell style={{ borderBottom: "none" }}>
                  {properties[propertyName]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductPropertiesTable;
