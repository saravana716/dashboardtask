import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Box,
  Button,
  Typography,
} from "@mui/material";

const data = [
  {
    customerName: "Alice Johnson",
    company: "Yahoo",
    phoneNumber: "(235)-756-3546",
    email: "johnson@Yahoo.com",
    country: "United States",
    status: "Active",
  },
  {
    customerName: "Carlos Silva",
    company: "Amazon",
    phoneNumber: "(867)-465-2435",
    email: "carlos@Amazon.com",
    country: "Brazil",
    status: "Inactive",
  },
  {
    customerName: "David Cohen",
    company: "Adobe",
    phoneNumber: "(287)-762-8376",
    email: "david@Adobe.com",
    country: "Japan",
    status: "Active",
  },
  {
    customerName: "Fatima Rahimi",
    company: "Tesla",
    phoneNumber: "(298)-987-2098",
    email: "fatima@Tesla.com",
    country: "India",
    status: "Inactive",
  },
  {
    customerName: "Mia Khalifa",
    company: "Facebook",
    phoneNumber: "(978)-398-2877",
    email: "Mia@Facebook.com",
    country: "Brazil",
    status: "Inactive",
  },
  {
    customerName: "Maria Santos",
    company: "Yahoo",
    phoneNumber: "(376)-827-3787",
    email: "Maria@Yahoo.com",
    country: "United States",
    status: "Inactive",
  },
  {
    customerName: "Sarah Levi",
    company: "Google",
    phoneNumber: "(867)-978-4656",
    email: "Sarah@Google.com",
    country: "Israel",
    status: "Active",
  },
  {
    customerName: "Mohammad Ali",
    company: "Microsoft",
    phoneNumber: "(645)-876-2345",
    email: "Ali@Microsoft.com",
    country: "Indonesia",
    status: "Active",
  },
  {
    customerName: "Emily Davis",
    company: "Microsoft",
    phoneNumber: "(354)-356-8667",
    email: "Emily@microsoft.com",
    country: "Brazil",
    status: "Active",
  },
  {
    customerName: "Roberto Lima",
    company: "Yahoo",
    phoneNumber: "(745)-345-8656",
    email: "Robert@Yahoo.com",
    country: "Mexico",
    status: "Inactive",
  },
  {
    customerName: "Yael Ben-David",
    company: "Amazon",
    phoneNumber: "(354)-645-5542",
    email: "David@Amazon.com",
    country: "United Arabs Emirate",
    status: "Inctive",
  },
  {
    customerName: "Nadia Khorrami",
    company: "Microsoft",
    phoneNumber: "(186)-635-4254",
    email: "Nadia@Microsoft.com",
    country: "Italy",
    status: "Active",
  },
  {
    customerName: "Michael Brown",
    company: "yahoo",
    phoneNumber: "(524)-726-6254",
    email: "Michael@yahoo.com",
    country: "United States",
    status: "Active",
  },
  {
    customerName: "Fernanda Oliveira",
    company: "Intel",
    phoneNumber: "(276)-632-2876",
    email: "Fernanda@intel.com",
    country: "Spain",
    status: "Inactive",
  },
  {
    customerName: "Oren Shapiro",
    company: "Google",
    phoneNumber: "(632)-725-5245",
    email: "Oren@mailfence.com",
    country: "South Korea",
    status: "Active",
  },
  {
    customerName: "Reza Mohammadi",
    company: "Microsoft",
    phoneNumber: "(637)-426-6275",
    email: "Reza@tech.com",
    country: "France",
    status: "Inactive",
  },
  {
    customerName: "Lisa Green",
    company: "Yahoo",
    phoneNumber: "(675)-187-4567",
    email: "Lisa@Yahoo.com",
    country: "Australia",
    status: "Inactive",
  },
  {
    customerName: "Juliana Costa",
    company: "Google",
    phoneNumber: "(465)-469-4567",
    email: "Juliana@google.com",
    country: "Japan",
    status: "Active",
  },
  {
    customerName: "Avigail Rosen",
    company: "Google",
    phoneNumber: "(346)-456-7893",
    email: "Avigail@Google.com",
    country: "United Kingdom",
    status: "Inactive",
  },
  {
    customerName: "Danny Daniels",
    company: "Microsoft",
    phoneNumber: "(245)-567-8904",
    email: "Danny@tech.com",
    country: "Germany",
    status: "Active",
  },
];

export default function CustomerTable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalEntries = data.length;
  const startEntry = (page - 1) * rowsPerPage + 1;
  const endEntry = Math.min(page * rowsPerPage, totalEntries);

  return (
    <Box sx={{ paddingTop: 0, paddingBottom: 0, width: "100%" }}>
      <TableContainer component={Paper} sx={{ marginTop: 0 }}>
        <Table stickyHeader sx={{ tableLayout: "fixed", minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ color: "#B5B7C0" }}>
                Customer Name
              </TableCell>
              <TableCell align="left" sx={{ color: "#B5B7C0" }}>
                Company
              </TableCell>
              <TableCell align="left" sx={{ color: "#B5B7C0" }}>
                Phone Number
              </TableCell>
              <TableCell align="left" sx={{ color: "#B5B7C0" }}>
                Email
              </TableCell>
              <TableCell align="left" sx={{ color: "#B5B7C0" }}>
                Country
              </TableCell>
              <TableCell align="left" sx={{ color: "#B5B7C0" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {row.customerName}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>{row.company}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {row.phoneNumber}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>{row.email}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>{row.country}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      width: "90px", // Set a fixed width
                      height: "30px", // Set a fixed height
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        row.status === "Active"
                          ? "rgba(22, 192, 152, 0.5)"
                          : "rgba(255, 197, 197, 0.5)",
                      border:
                        row.status === "Active"
                          ? "1px solid green"
                          : "1px solid red",
                      color: row.status === "Active" ? "#008767" : "#DF0404",
                      textTransform: "none",
                    }}
                  >
                    {row.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
          marginLeft: 2,
        }}
      >
        <Typography sx={{ fontSize: "14px", color: "#B5B7C0" }}>
          Showing data {startEntry} to {endEntry} of{" "}
          {totalEntries.toLocaleString()} entries
        </Typography>
        <Pagination
          count={Math.ceil(data.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        />
      </Box>
    </Box>
  );
}
