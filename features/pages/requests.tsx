import { Box, Button, Table } from "@mantine/core";

const elements = [
    { date:"March 3 , 2023",status:"Delivered",content:"test 123" },
    { date:"March 4 , 2023",status:"Delivered",content:"test 123" },
    { date:"March 4 , 2023",status:"Delivered",content:"test 123" },
  
  ];
export default function RequestsPage(){

    const rows = elements.map((element) => (
        <tr key={element.date}>
          <td>{element.date}</td>
          <td>{element.status}</td>
          <td>
     
            <Button size="xs" className="bg-green-800 hover:bg-green-700 ml-2">Received</Button>
            </td>
        
        </tr>
      ));
    
      return (
        <Box p={20} className="bg-white rounded">
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