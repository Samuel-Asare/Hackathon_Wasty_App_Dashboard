// import { StatusOnlineIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import axios from "axios"
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
  const[data,setData]=useState([])

 

  useEffect(()=>{
const getAllRequest=async()=>{
  try {
    const res= await axios.get("https://hackathon-waste-api.onrender.com/api/v1/waste-request/all",{
      headers:{
           token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      }
    })

    setData(res.data)
  } catch (error) {
   console.log(error)
  }
}
getAllRequest()
  },[])


 
    const handleDelete = async(id)=>{
      try {
        await axios.delete(`https://hackathon-waste-api.onrender.com/api/v1/waste-request/delete/${id}`,{
          headers:{
            token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
       }
        })
        setData(data.filter((item) => item._id !== id));
      } catch (error) {
        console.log(error)
      }
    }

    
    const handleStatus = async(id) => {
      try {
        await axios.put(`https://hackathon-waste-api.onrender.com/api/v1/waste-request/verify/${id}`,{
          headers:{
            token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
       }
        })
        setData(data.filter((item) => item._id !== id));
      } catch (error) {
        console.log(error)
      }
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
        {
              data.map((item)=>(
                <>
          <TableRow className="table_body">
            <TableCell>
              <button 
                className="status_btn"
                style={{ backgroundColor: requestStatus ? "" : "red" }}
                onClick={()=>handleStatus(item._id)}
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
                onClick={()=>handleDelete(item._id)}
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
              <Text>example@gmail.com</Text>
            </TableCell>
            <TableCell>
              <Text>yes</Text>
            </TableCell>
            <TableCell>
              {item.date}<Text>03/0</Text>
            </TableCell>
            <TableCell>
              <Text>{item.landmark}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.location}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.telephone}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.numberOfBins}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.wastype}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.serviceOption}</Text>
            </TableCell>
           
            
          </TableRow>
          </>
          ))
        }
        </TableBody>
      </Table>
    </Card>
  );
};

export default RequestTable;
