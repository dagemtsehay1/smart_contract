import { AppShell, Navbar, Header, Image, List, Flex } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { Balance } from "./balance";

type ShellProps = {
  children: ReactNode;
};

export function Shell(props: ShellProps) {
  const router = useRouter();
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Add New Contract",
      link: "/contract",
    },
    {
      label: "Contracts",
      link: "/contracts-list",
    },
    {
      label: "Requests",
      link: "/requests",
    },
  ];

  useEffect(() => {
    console.log(router);
  }, [router]);
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height="100%">
          <List>
            {links.map((link) => {
              let style =
                router.asPath == link.link
                  ? "bg-primary text-white  cursor-pointer p-2 font-semibold "
                  : "hover:bg-primary-50 cursor-pointer p-2 font-semibold";
              return (
                <List.Item key={link.link} className={style}>
                  <Link href={link.link}>{link.label}</Link>
                </List.Item>
              );
            })}
          </List>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Flex justify="space-between">

          <Image
            src="http://peragosystems.com/assets/images/perago2.png"
            width={100}
            alt="logo"
          />
          <Balance user="User 1"/>
          </Flex>
          
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      hidden={router.pathname == "/login"}
    >
      {props.children}
    </AppShell>
  );
}
