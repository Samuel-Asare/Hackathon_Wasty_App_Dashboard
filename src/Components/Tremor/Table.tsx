/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
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

interface WasteRequest {
  _id: string;
  status: string;
  username: string;
  location: string;
  landmark: string;
  date: string;
  telephone: string;
  wasteType: string;
  numberOfBins: number;
  serviceOption: string;
}

const RequestTable: React.FC = () => {
  const [data, setData] = useState<WasteRequest[]>([]);

  useEffect(() => {
    const getAllRequest = async () => {
      try {
        const res = await axios.get<WasteRequest[]>(
          "https://hackathon-waste-api.onrender.com/api/v1/waste-request/all",
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user") || "{}").accessToken,
            },
          }
        );

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRequest();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `https://hackathon-waste-api.onrender.com/api/v1/waste-request/delete/${id}`,
        {
          headers: {
            token:
              "Bearer " +
              JSON.parse(localStorage.getItem("user") || "{}").accessToken,
          },
        }
      );
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id: string) => {
    try {
      await axios.put(
        `https://hackathon-waste-api.onrender.com/api/v1/waste-request/verify/${id}`,
        {},
        {
          headers: {
            token:
              "Bearer " +
              JSON.parse(localStorage.getItem("user") || "{}").accessToken,
          },
        }
      );
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="table_card">
      <Title className="table_card_header_text">
        List Of Customer Waste Collection Request
      </Title>
      <Table className="mt-5 data_table">
        <TableHead className="table_Head">
          <TableRow className="table_Row">
            <TableHeaderCell className="table_cell">Status</TableHeaderCell>
            <TableHeaderCell className="table_cell">Action</TableHeaderCell>
            <TableHeaderCell className="table_cell">Name</TableHeaderCell>
            <TableHeaderCell className="table_cell">Location</TableHeaderCell>
            <TableHeaderCell className="table_cell">Landmark</TableHeaderCell>
            <TableHeaderCell className="table_cell">
              Pickup date & Time
            </TableHeaderCell>
            <TableHeaderCell className="table_cell">Telephone</TableHeaderCell>
            <TableHeaderCell className="table_cell">Waste Type</TableHeaderCell>
            <TableHeaderCell className="table_cell">
              Quantity of Bins
            </TableHeaderCell>
            <TableHeaderCell className="table_cell">
              Service Option
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id} className="table_body">
              <TableCell>
                <button
                  className="status_btn"
                  onClick={() => handleStatus(item._id)}
                >
                  {item.status}
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
                  onClick={() => handleDelete(item._id)}
                  style={{ cursor: "pointer" }}
                >
                  <path d="m5.25 5.25.938 15c.044.867.675 1.5 1.5 1.5h8.625c.828 0 1.447-.633 1.5-1.5l.937-15" />
                  <path d="M3.75 5.25h16.5" />
                  <path d="M9 5.25V3.375a1.122 1.122 0 0 1 1.125-1.125h3.75A1.121 1.121 0 0 1 15 3.375V5.25" />
                  <path d="M12 8.25v10.5" />
                  <path d="M8.625 8.25 9 18.75" />
                  <path d="M15.375 8.25 15 18.75" />
                </svg>
              </TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>
                <Text>{item.location}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.landmark}</Text>
              </TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Text>{item.telephone}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.wasteType}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.numberOfBins}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.serviceOption}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default RequestTable;
