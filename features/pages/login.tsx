
import { Box, Button, Center, Divider, Input,Text } from "@mantine/core";
import { LoginCard } from "../components/login-card";

export default function LoginPage (){
    return <Box className="min-h-screen w-screen flex flex-row items-center justify-center bg-slate-100">
        <LoginCard title="Login">  
        <Box p={10}>
       <form>
        <Text size="xs" fw="500">Email</Text>
        <Input type="email" placeholder="example@website.com" required/>
        <Text size="xs" fw="500" mt={10}>Password</Text>
        <Input type="password" placeholder="********" required/>
        <Button mt={10} w="100%" className="bg-primary">Login</Button>
       </form>
       <Divider my={15}/>
        </Box>
        </LoginCard>
        </Box>
}