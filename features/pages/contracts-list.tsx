import { Box, Button, Table } from "@mantine/core";
import { Balance } from "../components/balance";
import { getUserBalance } from "../api/api";

const elements = [
    { date:"March 3 , 2023",status:"Submited",content:"test 123" },
    { date:"March 4 , 2023",status:"Submited",content:"test 123" },
    { date:"March 5 , 2023",status:"Accepted",content:"test 123" },
    { date:"March 6 , 2023",status:"Submited",content:"test 123" },
    { date:"March 7 , 2023",status:"Accepted",content:"test 123" },
    { date:"March 8 , 2023",status:"Submited",content:"test 123" },
    { date:"March 9 , 2023",status:"Submited",content:"test 123" },
  ];
export default function ContractsListPage(){

    const rows = elements.map((element) => (
        <tr key={element.date}>
          <td>{element.date}</td>
          <td>{element.status}</td>
          <td>
            {element.status == "Submited" ?<Button size="xs" className="bg-primary ml-2">Accept</Button> :
            <Button size="xs" className="bg-yellow-600 hover:bg-yellow-700 ml-2" onClick={()=>getUserBalance("0x3bFA1DcBC2755278c611ECd418191521f8d78399")}>Delivered</Button>}
            </td>
        
        </tr>
      ));
    
      return (
        <Box p={20} className="bg-white rounded">
             <Balance user="User 2"/>
        <Table>
          <thead>
            <tr>
              <th>Expired date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        </Box>
      );
}