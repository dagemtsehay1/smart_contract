import { Button, Flex, Modal, Text, TextInput } from "@mantine/core";
import { useState } from "react";

type BalanceProps={
    user:"User 1" | "User 2";
}
export function Balance(props:BalanceProps) {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
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
    />
    <Button mt={10} className="bg-primary">Deposit</Button>
    </Modal>
    </>
  );
}
