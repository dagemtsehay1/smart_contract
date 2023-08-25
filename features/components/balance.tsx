import { Button, Flex, Modal, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import MyApi from "../api/api";

type BalanceProps={
    user:string;
}
export function Balance(props:BalanceProps) {
  const myApi = new MyApi(window.ethereum)
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
    const deposit = async()=>{
      // const res = await myApi.sendTransaction();
    }
  return (
    <>
    <Flex>
      <Text>{props.user} Balance $ 0</Text>
      <Button size="xs" className="bg-primary text-xl ml-5" onClick={()=>setIsModalOpened(true)}>
        +
      </Button>
    </Flex>
    <Modal opened={isModalOpened} onClose={()=>setIsModalOpened(false)} title="Deposit ">
    <TextInput
    label="Amount"
    placeholder="Amount"
    value={0.2}
    disabled
    />
    <Button mt={10} className="bg-primary" onClick={deposit}>Deposit</Button>
    </Modal>
    </>
  );
}
