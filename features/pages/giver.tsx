import {
    Box,
    Button,
    Table,
    Text,
    Flex,
    Modal,
    TextInput,
  } from "@mantine/core";
  import { Balance } from "../components/balance";
  import MyApi from "../api/api";
  import { useEffect, useState } from "react";
  import data from "../../data/data.json";
  const elements = [
    { date: "March 3 , 2023", status: "Submited", content: "test 123" },
    { date: "March 4 , 2023", status: "Submited", content: "test 123" },
    { date: "March 5 , 2023", status: "Accepted", content: "test 123" },
    { date: "March 6 , 2023", status: "Submited", content: "test 123" },
    { date: "March 7 , 2023", status: "Accepted", content: "test 123" },
    { date: "March 8 , 2023", status: "Submited", content: "test 123" },
    { date: "March 9 , 2023", status: "Submited", content: "test 123" },
  ];
  
  export default function GiverPage() {
    const [getElements, setElements] = useState<any[]>([]);
    const myApi = new MyApi(window.ethereum);
    const [userId, setUserId] = useState<any>();
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [selectedRow, setSelectedRow] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const deposit = async () => {
      setIsLoading(true);
      console.log(
        "senderAddress ",
        userId,
        "contractAddress ",
        selectedRow.contractId
      );
      try {
        const res = await myApi.sendTransaction(
          "0x0c7F70F12b632548B59ADC6cCe467fad18b600D2",
          "0x59007DD4b9946ac26c4C07caCAEdbDb8baFc8F68"
        );
        // const res = await myApi.sendTransaction(data.reciver[0].userId.trim(),selectedRow.contractId.trim());
        console.log("asaaaaaaaaaaaaaaaaaaaaaaaaaaaaa : ", res);
        if (res.blockHash) {
          setIsModalOpened(false);
          setIsLoading(false);
        }
      } catch (err: any) {
        // setIsModalOpened(false)
        setIsLoading(false);
      }
    };
    const caller = async () => {
      const res = await myApi.getGiver();
      const status = await myApi.getstatus();
      const exdate = await myApi.getContractEndDate();
      const balance = await myApi.getBalance();
      setElements([
        {
          date: exdate.toString(),
          status: status.toString(),
          balance: balance.toString(),
          contractId: data.giver[0].contractId,
        },
      ]);
      setUserId(res);
    };
    useEffect(() => {
      caller();
    }, []);
    const rows = getElements.map((element) => (
      <tr key={element.date}>
        <td>{element.contractId}</td>
        <td>{element.status}</td>
        <td>{element.balance}</td>
        <td>{element.date}</td>
        <td className="flex">
          <Button
            className="bg-primary"
            size="xs"
            onClick={() => {
              setSelectedRow(element);
              setIsModalOpened(true);
            }}
          >
            +
          </Button>
          {element.status == "Submited" ? (
            <Button size="xs" className="bg-primary ml-2">
              Accept
            </Button>
          ) : (
            <Button
              size="xs"
              className="bg-green-800 hover:bg-green-700 ml-2"
              onClick={async() =>{
                  const res = await myApi.recived(); 
                  console.log("recccccccccccccccccccccccccccccccccccccc",res)
              }
              }
            >
              Recieved
            </Button>
          )}
        </td>
      </tr>
    ));
  
    return (
      <Box p={20} className="bg-white rounded">
        <Balance user="Giver" />
        <Text>User : {userId}</Text>
        <Table>
          <thead>
            <tr>
              <th>Contract Id</th>
              <th>Status</th>
              <th>Balance</th>
              <th>Expired date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Modal
          opened={isModalOpened}
          onClose={() => setIsModalOpened(false)}
          title="Deposit "
        >
          <TextInput label="Amount" placeholder="Amount" value={0.2} disabled />
          <Button
            loading={isLoading}
            mt={10}
            className="bg-primary"
            onClick={deposit}
          >
            Deposit
          </Button>
        </Modal>
      </Box>
    );
  }
  