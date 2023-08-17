import { Box, Center, Text } from "@mantine/core";
import { ReactNode } from "react";

type LoginCardProps = {
  title: string;
  children: ReactNode;
};
export function LoginCard(props: LoginCardProps) {
  return (
    <Box>
      <Box className="min-h-[200px] w-[400px] shadow rounded-lg bg-white">
        
        <Center className="-mt-9">
          <Text fz="xl" fw="500">
            {props.title}
          </Text>
        </Center>
        {props.children}
      </Box>
    </Box>
  );
}
