// import { StatusOnlineIcon } from "@heroicons/react/solid";
import { useState } from "react";
import "../../css/TableDataContent.css";

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
} from "@tremor/react";

const RequestTable = () => {
  const [requestStatus, setRequestStatus] = useState(false);

  const handleStatusButton = () => {
    setRequestStatus(!requestStatus);
  };

  return (
    <Card className="card">
      <Title>List Of Customer Waste Collection Request</Title>
      <Table className="mt-5 data_table">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Bulky Items</TableHeaderCell>
            <TableHeaderCell>Pickup date & Time</TableHeaderCell>
            <TableHeaderCell>Landmark</TableHeaderCell>
            <TableHeaderCell>Town</TableHeaderCell>
            <TableHeaderCell>Telephone</TableHeaderCell>
            <TableHeaderCell>Quantity of Bins</TableHeaderCell>
            <TableHeaderCell>Waste Type</TableHeaderCell>
            <TableHeaderCell>Service Option</TableHeaderCell>
            <TableHeaderCell>Additional Infor</TableHeaderCell>
            <TableHeaderCell>Request</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="table_body">
            <TableCell>
              <button
                className="status_btn"
                style={{ backgroundColor: requestStatus ? "" : "red" }}
                onClick={handleStatusButton}
              >
                {requestStatus ? "Granted" : "Pending"}
              </button>
            </TableCell>
            <TableCell>
              <svg
                width={15}
                height={15}
                fill="none"
                stroke="goldenrod"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m5.25 5.25.938 15c.044.867.675 1.5 1.5 1.5h8.625c.828 0 1.447-.633 1.5-1.5l.937-15" />
                <path d="M3.75 5.25h16.5" />
                <path d="M9 5.25V3.375a1.122 1.122 0 0 1 1.125-1.125h3.75A1.121 1.121 0 0 1 15 3.375V5.25" />
                <path d="M12 8.25v10.5" />
                <path d="M8.625 8.25 9 18.75" />
                <path d="M15.375 8.25 15 18.75" />
              </svg>
            </TableCell>
            <TableCell>Sam</TableCell>
            <TableCell>
              <Text>example@gmail.com</Text>
            </TableCell>
            <TableCell>
              <Text>yes</Text>
            </TableCell>
            <TableCell>
              10/2019<Text>03/0</Text>
            </TableCell>
            <TableCell>
              <Text>market</Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default RequestTable;
