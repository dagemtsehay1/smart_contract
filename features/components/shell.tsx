import { AppShell, Navbar, Header, Image, List, Flex } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { Balance } from "./balance";
// import dynamic from 'next/dynamic'
// const Shell = dynamic(() => import('@/features/components/shell'), {
//   ssr: false
// })
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
      label: "Giver",
      link: "/giver",
    },
    {
      label: "Reciver",
      link: "/receiver",
    },
    {
      label: "Requests",
      link: "/requests",
    },
  ];
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
                <Link href={link.link} key={link.link}><List.Item  className={style}>
                  {link.label}
                </List.Item></Link>
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
            {/* <Balance user={`user 1`} /> */}
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
